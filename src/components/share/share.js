import Vue from 'vue';

import template from './share.html!text';

let Share = Vue.extend({
    template,
    props: [
        'text',
        'url',
        'events'
    ]
});

export default Share;
