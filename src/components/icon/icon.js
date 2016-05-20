import Vue from 'vue';

import template from './icon.html!text';

let Icon = Vue.extend({
    template,
    props: ['name']
});

export default Icon;
