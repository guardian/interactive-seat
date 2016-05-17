import 'classlist-polyfill'

import Vue from 'vue';

import Tracking from '../components/tracking/tracking.js';

export let init = function(el) {
    new Vue({
        el,
        template: '<figure id="js-app"><div>Tracking test...</div><tracking></tracking></figure>',
        components: {
            Tracking
        }
    });
};
