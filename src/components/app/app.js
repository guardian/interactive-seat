import fastClick from 'fastclick/lib/fastclick';
import Vue from 'vue';

import template from './app.html!text';

import Byline from '../byline/byline';
import Copy from '../copy/copy';
import Experiment from '../experiment/experiment';
import Header from '../header/header';
import Interactive from '../interactive/interactive';
import Navigation from '../navigation/navigation';
import Tracking from '../tracking/tracking';

Vue.config.devtools = true;
Vue.config.debug = true;

let App = Vue.extend({
    template,
    components: {
        Byline,
        Copy,
        Experiment,
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
