import 'classlist-polyfill';
import 'picturefill';

import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
import isGuardianAndroidApp from './lib/isGuardianAndroidApp';
import { isMobile, isTablet, isHandheld } from './lib/browser';

const CONTENT_URL = 'https://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json';

export let init = function(el, context, config) {
    const _isHandheld = isHandheld();
    const environment = {
        isMobile: isMobile(),
        isTablet: isTablet(),
        isHandheld: isHandheld(),
        isGuardianAndroidApp: isGuardianAndroidApp(),
        isCapable: !_isHandheld && config.bandwidth >= 2048
    };

    // console.log('(environment)', environment);

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
