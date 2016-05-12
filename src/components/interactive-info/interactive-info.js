import template from './interactive-info.html!text';
import Vue from 'vue';

let InteractiveInfo = Vue.extend({
    props: ['title', 'description'],
    template
});

export default InteractiveInfo;
