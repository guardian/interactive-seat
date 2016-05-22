import throttle from 'lodash.throttle';

import animate from '../../js/lib/animate';
import events from '../../js/modules/events';
import isElementInViewport from '../../js/lib/isElementInViewport';
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

const AUTOPLAY_TIMEOUT_DURATION = 4000;

let Header = Block.extend({
    template,
    components: {
        Button,
        Icon,
        ResponsiveImage,
        Video
    },
    data() {
        return {
            events
        };
    },
    methods: {
        play() {
            this.clearAutoPlayTimeout();

            document.removeEventListener(visibilityChangeEventName, this.onVisibilityChange, false);

            return this.playVideo()
                       .stopPreviewVideo()
                       .hideOverlay();
        },
        playVideo() {
            let primaryVideo = this.$children.filter((child) => child.$el.id === 'js-primary-video')[0];

            if (this.config.isMobile) {
                primaryVideo.play();

                return this;
            }

            primaryVideo.play();

            return this;
        },
        stopVideo() {
            let primaryVideo = this.$children.filter((child) => child.$el.id === 'js-primary-video')[0];

            primaryVideo.pause();

            return this.showOverlay();
        },
        playPreviewVideo() {
            let previewVideo = this.$children.filter((child) => child.$el.id === 'js-preview-video')[0];

            if (previewVideo.isPlaying) {
                return this;
            }

            previewVideo.play();

            previewVideo.$el.classList.remove('u-to-the-back');

            animate(previewVideo.$el, 'animate--fade-in');

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
        hideOverlay() {
            let overlayEl = this.$el.querySelector('#js-overlay');

            animate(overlayEl, 'animate--fade-out').then(() => {
                overlayEl.classList.add('u-to-the-back');
            });

            return this;
        },
        showOverlay() {
            let overlayEl = this.$el.querySelector('#js-overlay');

            overlayEl.classList.remove('u-to-the-back');

            animate(overlayEl, 'animate--fade-in');

            return this;
        },
        setAutoPlayTimeout() {
            this.onWindowScroll = throttle(() => {
                if (!isElementInViewport(this.$el)) {
                    this.clearAutoPlayTimeout();
                }
            }, 100);

            this.autoplayTimeout = setTimeout(() => this.play(), AUTOPLAY_TIMEOUT_DURATION);

            window.addEventListener('scroll', this.onWindowScroll, false);
        },
        clearAutoPlayTimeout() {
            clearTimeout(this.autoplayTimeout);

            window.removeEventListener('scroll', this.onWindowScroll, false);

            return this;
        },
        onVisibilityChange() {
            if (pageIsVisible()) {
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
        'video-pause': function () {
            this.stopVideo()
                .showOverlay();
        },
        'video-end': function () {
            this.playPreviewVideo()
                .showOverlay();
        }
    },
    ready() {
        if (this.config.isMobile) {
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
