import 'classlist-polyfill';
import 'picturefill';

import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
import isGuardianAndroidApp from './lib/isGuardianAndroidApp';
import { isMobile, isTablet, isHandheld, isCapable } from './lib/browser';

const CONTENT_URL = 'https://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json';

export let init = function(el, context, config) {
    Object.assign(config, {
        isMobile: isMobile(),
        isTablet: isTablet(),
        isHandheld: isHandheld(),
        isGuardianAndroidApp: isGuardianAndroidApp(),
        isCapable: false
    });

    // console.log('(environment)', environment);

    fetchJSON(CONTENT_URL)
        .then((content) => cleanData(content))
        .then((content) => {
            let data = {
                blocks: content.blocks,
                config: Object.assign(config, content.config)
            };

            // console.log('(data)', data);

            config.isCapable = isCapable(config.isHandheld, config.bandwidth);

            new App({ data, el });
        });
};
