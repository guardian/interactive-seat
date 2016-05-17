import Vue from 'vue';

import template from './video.html!text';

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
    props: [
        'path',
        'bandwidth'
    ],
    data() {
        return {
            sources: getSources(this.path, this.bandwidth)
        };
    },
    methods: {
        play() {
            this.$el.play();
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

function getSources(path, bandwidth) {
    let bitRate = getBitRate(bandwidth);

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
