import 'classlist-polyfill';

import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
import getBandwidth from './lib/bandwidth';
import isGuardianAndroidApp from './lib/isGuardianAndroidApp';
import { isMobile, isTablet, isHandheld } from './lib/browser';

const CONTENT_URL = 'https://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json';

export let init = function(el, context, config) {


    Promise.all([
        fetchJSON(CONTENT_URL),
        getBandwidth()
    ]).then((results) => {
        let [data] = results;

        cleanData(data);

        return results;
    }).then((results) => {
        let [data, bandwidth] = results;

        Object.assign(data.config, config, {
            bandwidth,
            isGuardianAndroidApp: isGuardianAndroidApp(),
            isMobile: isMobile(),
            isTablet: isTablet(),
            isHandheld: isHandheld()
        });

        // console.log('(isGuardianAndroidApp, isMobile, isTablet, isHandheld)', isMobile(), isTablet(), isHandheld());

        console.log('Data: ', data);

        new App({
            data,
            el
        });
    });
};
