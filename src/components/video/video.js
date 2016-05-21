import Vue from 'vue';

import events from '../../js/modules/events';
import template from './video.html!text';

// Components
import Button from '../button/button';
import Icon from '../icon/icon';

const FORMATS = ['mp4', 'webm', 'ogg'];
const OGG_SUFFIXES = {
    '4M': '_xhi.ogv',
    '2M': '_hi.ogv',
    '768k': '_mid.ogv',
    '488k': '_tiny.ogv',
    '220k': '_lo.ogv'
};

let Video = Vue.extend({
    template,
    components: {
        Button,
        Icon
    },
    props: {
        path: String,
        bandwidth: Number,
        preload: {
            type: String,
            default: 'none'
        },
        hasControls: {
            type: Boolean,
            default: false
        },
        autoplay: {
            type: Boolean,
            default: false
        },
        loop: {
            type: Boolean,
            default: false
        },
        muted: {
            type: Boolean,
            default: false
        },
        progress: {
            type: Number,
            default: 0
        }
    },
    data() {
        let bitRate = getBitRate(this.bandwidth);

        return {
            events,
            sources: getSources(this.path, bitRate),
            poster: getPosterUrl(this.path, bitRate),
            isPlaying: false
        };
    },
    methods: {
        play() {
            this.isPlaying = true;

            this.$el.querySelector('.js-video-player').play();
        },
        pause() {
            this.isPlaying = false;

            this.$el.querySelector('.js-video-player').pause();
        },
        setCurrentTime(currentTime) {
            this.$el.querySelector('.js-video-player').currentTime = currentTime;
        },
        onClickPauseButton() {
            this.$dispatch('video-pause');
        },
        onTimeUpdate(event) {
            this.progress = (event.target.currentTime / event.target.duration) * 100;
        },
        onClickSeekBar(event) {
            let rect = this.$el.querySelector('.js-seek-bar').getBoundingClientRect();
            let deltaX = event.x - rect.left;
            let elWidth = rect.width;
            let duration = this.$el.querySelector('.js-video-player').duration;
            let currentTime = (1 / elWidth) * deltaX * duration;

            this.setCurrentTime(currentTime);
        },
        onEnded() {
            this.$dispatch('video-end');
        }
    }
});

function getBitRate(bandwidth) {
    let bitRate;

    if (bandwidth >= 4096) {
        bitRate = '4M';
    } else if (bandwidth >= 2048) {
        bitRate  = '2M';
    } else if (bandwidth >= 1024) {
        bitRate  = '768k';
    } else if (bandwidth >= 512) {
        bitRate  = '488k';
    } else {
        bitRate = '220k';
    }

    return bitRate;
}

function getSources(path, bitRate) {
    return FORMATS.map((format) => {
        return {
            src: getUrl(path, bitRate, format),
            format: format
        };
    });
}

function getMp4Url(path, bitRate) {
    return `${ path }_${ bitRate }_H264.mp4`;
}

function getWebmUrl(path, bitRate) {
    return `${ path }_${ bitRate }_vp8.webm`;
}

function getOggUrl(path, bitRate) {
    return `${ path }${ OGG_SUFFIXES[bitRate] }`;
}

function getPosterUrl(path, bitRate) {
    return `${ path }_${ bitRate }_H264_poster.jpg`;
}

function getUrl(path, bitRate, format) {
    switch (format) {
    case 'mp4':
        return getMp4Url(path, bitRate);
    case 'webm':
        return getWebmUrl(path, bitRate);
    case 'ogg':
        return getOggUrl(path, bitRate);
    default:
        return 'Unsupported format.';
    }
}

export default Video;
