import fastClick from 'fastclick/lib/fastclick';
import Vue from 'vue';

import '../../js/modules/transitions';
import template from './app.html!text';
import loadScript from '../../js/lib/loadScript';
import { isCapable } from '../../js/lib/browser';

// Components
import Byline from '../byline/byline';
import Copy from '../copy/copy';
import Credits from '../credits/credits';
import Header from '../header/header';
import Icon from '../icon/icon';
import Interactive from '../interactive/interactive';
import Navigation from '../navigation/navigation';
import Quote from '../quote/quote';
import Subhead from '../subhead/subhead';
import Tracking from '../tracking/tracking';

// Partials
import Icons from '../../partials/icons.svg!text';

const OPHAN_TRACKING_SCRIPT_URL = 'https://j.ophan.co.uk/interactive.js';

// Vue.config.devtools = true;
// Vue.config.debug = true;

let App = Vue.extend({
    template,
    components: {
        Byline,
        Copy,
        Credits,
        Header,
        Icon,
        Interactive,
        Navigation,
        Quote,
        Subhead,
        Tracking
    },
    partials: {
        Icons
    },
    init() {
        console.log('Hello World!');

        fastClick(document.body);
    },
    ready() {
        loadScript(OPHAN_TRACKING_SCRIPT_URL);
    },
    watch: {
        'config.bandwidth'(bandwidth) {
            this.config.isCapable = isCapable(this.config.isHandheld, bandwidth);
        }
    }
});

export default App;
