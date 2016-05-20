import fastClick from 'fastclick/lib/fastclick';
import Vue from 'vue';

import template from './app.html!text';

// Components
import Byline from '../byline/byline';
import Copy from '../copy/copy';
import Credits from '../credits/credits';
import Experiment from '../experiment/experiment';
import Header from '../header/header';
import Icon from '../icon/icon';
import Interactive from '../interactive/interactive';
import Navigation from '../navigation/navigation';
import Subhead from '../subhead/subhead';
import Tracking from '../tracking/tracking';

// Partials
import Icons from '../../partials/icons.svg!text';

Vue.config.devtools = true;
Vue.config.debug = true;

let App = Vue.extend({
    template,
    components: {
        Byline,
        Copy,
        Credits,
        Experiment,
        Header,
        Icon,
        Interactive,
        Navigation,
        Subhead,
        Tracking
    },
    partials: {
        Icons
    },
    init() {
        console.log('Hello World!');

        fastClick(document.body);
    }
});

export default App;
