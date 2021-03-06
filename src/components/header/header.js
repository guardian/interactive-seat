import Vue from 'vue';

import animate from '../../js/lib/animate';
import events from '../../js/modules/events';
import isElementInViewport from '../../js/lib/isElementInViewport';
import onWindowScroll from '../../js/mixins/onWindowScroll';
import pageIsVisible from '../../js/lib/pageIsVisible';

import { visibilityChangeEventName } from '../../js/lib/browser';
import { supportsPageVisibility } from '../../js/lib/support';

// Components
import Block from '../../js/modules/Block';
import Button from '../button/button';
import Icon from '../icon/icon';
import ResponsiveImage from '../responsive-image/responsive-image';
import template from './header.html!text';
import Video from '../video/video';

const AUTOPLAY_TIMEOUT_DURATION = 5000;

let Header = Block.extend({
    mixins: [onWindowScroll],
    template,
    components: {
        Button,
        Icon,
        ResponsiveImage,
        Video
    },
    data() {
        return {
            events,
            isPlaying: false
        };
    },
    watch: {
        'config.isCapable'(isCapable, wasCapable) {
            if (!isCapable && wasCapable) {
                this.clearAutoPlayTimeout();
            }
        }
    },
    methods: {
        play(wasAutoplayed) {
            if (this.isPlaying) {
                return this;
            }

            this.isPlaying = true;

            this.clearAutoPlayTimeout();

            if (wasAutoplayed) {
                this.cancelOnWindowScroll = this.onWindowScroll(() => {
                    if (!isElementInViewport(this.$el, 1/3)) {
                        this.pause();

                        this.cancelOnWindowScroll();
                    }
                });
            }

            document.removeEventListener(visibilityChangeEventName, this.onVisibilityChange, false);

            if (this.config.isCapable) {
                return this.playVideo()
                           .stopPreviewVideo()
                           .hideOverlay();
            }

            return this.playVideo()
                       .hidePreviewImage()
                       .hideOverlay();
        },
        pause() {
            if (!this.isPlaying) {
                return this;
            }

            this.isPlaying = false;

            if (this.config.isMobile) {
                this.showPreviewImage();
            }

            return this.stopVideo()
                       .showOverlay();
        },
        playVideo() {
            let primaryVideo = this.$children.filter((child) => child.$el.id === 'js-primary-video')[0];

            primaryVideo.play();

            return this;
        },
        stopVideo() {
            let primaryVideo = this.$children.filter((child) => child.$el.id === 'js-primary-video')[0];

            primaryVideo.pause();

            return this;
        },
        playPreviewVideo() {
            let previewVideo = this.$children.filter((child) => child.$el.id === 'js-preview-video')[0];

            if (previewVideo.isPlaying) {
                return this;
            }

            previewVideo.play();

            animate(previewVideo.$el, 'animate--fade-in');

            previewVideo.$el.classList.remove('u-to-the-back');

            return this;
        },
        stopPreviewVideo() {
            let previewVideo = this.$children.filter((child) => child.$el.id === 'js-preview-video')[0];

            if (!previewVideo.isPlaying) {
                return this;
            }

            animate(previewVideo.$el, 'animate--fade-out').then(() => {
                previewVideo.pause();

                previewVideo.$el.classList.add('u-to-the-back');
            });

            return this;
        },
        hidePreviewImage() {
            let previewImageEl = this.$el.querySelector('#js-preview-image');

            animate(previewImageEl, 'animate--fade-out').then(() => previewImageEl.classList.add('u-to-the-back'));

            return this;
        },
        showPreviewImage() {
            let previewImageEl = this.$el.querySelector('#js-preview-image');

            previewImageEl.classList.remove('u-to-the-back');

            animate(previewImageEl, 'animate--fade-in');

            return this;
        },
        hideOverlay() {
            let overlayEl = this.$el.querySelector('#js-overlay');

            animate(overlayEl, 'animate--fade-out').then(() => overlayEl.classList.add('u-to-the-back'));

            return this;
        },
        showOverlay() {
            let overlayEl = this.$el.querySelector('#js-overlay');

            animate(overlayEl, 'animate--fade-in');

            Vue.nextTick(() => overlayEl.classList.remove('u-to-the-back'));

            return this;
        },
        setAutoPlayTimeout() {
            this.cancelOnWindowScroll = this.onWindowScroll(() => {
                if (!isElementInViewport(this.$el, 1/3)) {
                    this.clearAutoPlayTimeout();
                }
            });

            this.autoplayTimeout = setTimeout(() => this.play(true), AUTOPLAY_TIMEOUT_DURATION);
        },
        clearAutoPlayTimeout() {
            clearTimeout(this.autoplayTimeout);

            if (typeof this.cancelOnWindowScroll === 'function') {
                this.cancelOnWindowScroll();
            }

            return this;
        },
        onVisibilityChange() {
            if (pageIsVisible() && isElementInViewport(this.$el, 1/3)) {
                this.setAutoPlayTimeout();

                return this;
            }

            this.clearAutoPlayTimeout();

            return this;
        },
        onClickPlayButton() {
            return this.play();
        }
    },
    events: {
        'video-pause'() {
            this.pause();
        },
        'video-end'() {
            if (this.config.isCapable) {
                this.playPreviewVideo()
                    .showOverlay();
            } else {
                this.showPreviewImage()
                    .showOverlay();
            }
        }
    },
    ready() {
        if (!this.config.isCapable) {
            return this;
        }

        if (supportsPageVisibility) {
            if (pageIsVisible()) {
                this.setAutoPlayTimeout();
            }

            document.addEventListener(visibilityChangeEventName, this.onVisibilityChange, false);

            return this;
        }

        return this.setAutoPlayTimeout();
    }
});

export default Header;
