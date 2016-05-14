import fastClick from 'fastclick/lib/fastclick';
import Vue from 'vue';

import template from './app.html!text';

import Byline from '../byline/byline';
import Copy from '../copy/copy';
import Header from '../header/header';
import Interactive from '../interactive/interactive';
import Navigation from '../navigation/navigation';
import Tracking from '../tracking/tracking';

let App = Vue.extend({
    template,
    components: {
        Byline,
        Copy,
        Header,
        Interactive,
        Navigation,
        Tracking
    },
    init() {
        console.log('Hello World!');

        fastClick(document.body);
    }
});

export default App;