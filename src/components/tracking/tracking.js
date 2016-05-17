import loadScript from '../../js/lib/loadScript';
import template from './tracking.html!text';
import Vue from 'vue';

const YOU_GOV_TRACKING_URL = '//tracker.yougov.com/campaign/11?name=inter';

let Tracking = Vue.extend({
    template,
    data() {
        return {
            randomNumber: Math.random() * 10000000000000
        }
    },
    init() {
        loadScript(YOU_GOV_TRACKING_URL);
    }
});

export default Tracking;
