import animate from '../../js/lib/animate';
import Block from '../../js/modules/Block';
import Button from '../button/button';
import ResponsiveImage from '../responsive-image/responsive-image';
import template from './experiment.html!text';
import Video from '../video/video';

let Experiment = Block.extend({
    template,
    components: {
        Button,
        ResponsiveImage,
        Video
    },
    methods: {
        playVideo() {
            let videos = this.$children.filter((child) => child instanceof Video);
            let previewVideo;
            let primaryVideo;
            let overlayEl;

            if (this.config.isMobile) {
                videos[0].play();

                return;
            }

            previewVideo = videos.filter((video) => video.$el.id === 'js-preview-video')[0];
            primaryVideo = videos.filter((video) => video.$el.id === 'js-primary-video')[0];
            overlayEl = this.$el.querySelector('#js-overlay');

            primaryVideo.play();

            animate(overlayEl, 'animate--fade-out');

            animate(previewVideo.$el, 'animate--fade-out').then(() => {
                previewVideo.pause();

                previewVideo.$el.classList.add('u-to-the-back');
                overlayEl.classList.add('u-to-the-back');
            });
        },
        stopVideo() {
            let videos = this.$children.filter((child) => child instanceof Video);
            let previewVideo;
            let primaryVideo;
            let overlayEl;

            previewVideo = videos.filter((video) => video.$el.id === 'js-preview-video')[0];
            primaryVideo = videos.filter((video) => video.$el.id === 'js-primary-video')[0];
            overlayEl = this.$el.querySelector('#js-overlay');

            previewVideo.play();
            primaryVideo.pause();

            previewVideo.$el.classList.remove('u-to-the-back');
            overlayEl.classList.remove('u-to-the-back');

            animate(previewVideo.$el, 'animate--fade-in');
            animate(overlayEl, 'animate--fade-in');
        },
        onClickPlayButton() {
            this.playVideo();
        },
        onPauseVideo() {
            this.stopVideo();
        },
        onEndVideo() {
            this.stopVideo();
        }
    },
    events: {
        'video-pause': function () {
            this.onPauseVideo();
        },
        'video-end': function () {
            this.onEndVideo();
        }
    }
});

export default Experiment;
