import Vue from 'vue';

import events from '../../js/modules/events';
import isElementInViewport from '../../js/lib/isElementInViewport';
import onWindowScroll from '../../js/mixins/onWindowScroll';
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
    mixins: [onWindowScroll],
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
        lazyLoad: {
            type: Boolean,
            default: true
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
        return {
            events,
            isPlaying: false,
            hasBubbled: false,
            canPlay: false,
            playWhenReady: false
        };
    },
    computed: {
        bitRate() {
            return getBitRate(this.bandwidth);
        },
        sources() {
            return getSources(this.path, this.bitRate);
        },
        poster() {
            return getPosterUrl(this.path, this.bitRate);
        }
    },
    methods: {
        play() {
            if (this.preload !== 'none' && !this.canPlay && !this.playWhenReady) {
                this.playWhenReady = true;

                return this;
            }

            if (this.isPlaying) {
                return this;
            }

            this.$el.querySelector('.js-video-player').play();

            if (this.hasControls) {
                this.animationFrameRequest = requestAnimationFrame(function checkTime() {
                    if (!this.isPlaying) {
                        return;
                    }

                    this.animationFrameRequest = requestAnimationFrame(checkTime.bind(this));

                    this.updateProgress();
                }.bind(this));
            }
        },
        pause() {
            if (!this.canPlay && this.playWhenReady) {
                this.playWhenReady = false;

                return this;
            }

            if (!this.isPlaying) {
                return this;
            }

            this.$el.querySelector('.js-video-player').pause();
        },
        setCurrentTime(currentTime) {
            Vue.nextTick(() => {
                this.$el.querySelector('.js-video-player').currentTime = currentTime;
            });
        },
        updateProgress() {
            let $videoPlayer = this.$el.querySelector('.js-video-player');

            this.progress = ($videoPlayer.currentTime / $videoPlayer.duration) * 100;
        },
        onClickPauseButton() {
            this.hasBubbled = true;

            this.$dispatch('video-pause');
        },
        onClickSeekBar(event) {
            let rect = this.$el.querySelector('.js-seek-bar').getBoundingClientRect();
            let deltaX = event.clientX - rect.left;
            let elWidth = rect.width;
            let duration = this.$el.querySelector('.js-video-player').duration;
            let currentTime = (1 / elWidth) * deltaX * duration;

            this.setCurrentTime(currentTime);
        },
        onCanPlay() {
            if (this.canPlay) {
                return;
            }

            this.canPlay = true;

            if (this.playWhenReady) {
                this.playWhenReady = false;

                this.play();
            }
        },
        onPlay() {
            this.isPlaying = true;
        },
        onPause() {
            this.isPlaying = false;

            if (this.hasBubbled) {
                this.hasBubbled = false;

                return this;
            }

            this.$dispatch('video-pause');
        },
        onAlternatePause() {
            this.isPlaying = false;
        },
        onEnded() {
            this.$dispatch('video-end');
        }
    },
    created() {
        this.isPlaying = this.autoplay = (this.autoplay && !this.lazyLoad);
    },
    ready() {
        if (!this.lazyLoad) {
            return this;
        }

        this.cancelOnWindowScroll = this.onWindowScroll(() => {
            if (isElementInViewport(this.$el)) {
                this.play();

                this.cancelOnWindowScroll();
            }
        });
    },
    beforeDestroy() {
        cancelAnimationFrame(this.animationFrameRequest);
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
