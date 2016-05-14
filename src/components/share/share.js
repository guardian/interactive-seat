import template from './share.html!text';
import Vue from 'vue';

let Share = Vue.extend({
    template,
    props: ['text', 'url']
});

export default Share;
