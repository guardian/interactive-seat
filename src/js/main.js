import 'classlist-polyfill';
import 'picturefill';

import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
import getBandwidth from './lib/bandwidth';
import isGuardianAndroidApp from './lib/isGuardianAndroidApp';
import { isMobile, isTablet, isHandheld } from './lib/browser';

const CONTENT_URL = 'https://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json';

export let init = function(el, context, config) {
    let _isMobile = isMobile();
    let _isTablet = isTablet();
    let bandwidth;
    let environment;

    if (_isMobile) {
        bandwidth = 0;
    } else if (_isTablet) {
        bandwidth  = 1024;
    } else {
        bandwidth = 4096;
    }

    environment = {
        bandwidth,
        isMobile: _isMobile,
        isTablet: _isTablet,
        isHandheld: isHandheld(),
        isGuardianAndroidApp: isGuardianAndroidApp()
    };

    // console.log('(environment)', environment);

    getBandwidth().then((bandwidth) => {
        environment.bandwidth = bandwidth;
    });

    fetchJSON(CONTENT_URL)
        .then((content) => cleanData(content))
        .then((content) => {
            let data = {
                blocks: content.blocks,
                config: Object.assign(environment, content.config, config)
            };

            // console.log('(data)', data);

            new App({
                data,
                el
            });
        });
};
