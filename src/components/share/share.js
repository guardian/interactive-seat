import Vue from 'vue';

import events from '../../js/modules/events';
import template from './share.html!text';

let Share = Vue.extend({
    template,
    props: {
        text: String,
        url: String,
        events: {
            type: Object,
            default() {
                return events;
            }
        }
    }
});

export default Share;
