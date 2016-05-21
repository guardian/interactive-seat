import animate from '../../js/lib/animate';
import events from '../../js/modules/events';

// Components
import Block from '../../js/modules/Block';
import Button from '../button/button';
import Icon from '../icon/icon';
import ResponsiveImage from '../responsive-image/responsive-image';
import template from './header.html!text';
import Video from '../video/video';

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
        onClickPlayButton() {
            return this.playVideo()
                       .stopPreviewVideo()
                       .hideOverlay();
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
    }
});

export default Header;
