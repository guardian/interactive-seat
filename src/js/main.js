import 'classlist-polyfill';

import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
import getBandwidth from './lib/bandwidth';
import isMobile from './lib/isMobile';
import isGuardianAndroidApp from './lib/isGuardianAndroidApp';

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
            isMobile: isMobile(),
            isGuardianAndroidApp: isGuardianAndroidApp()
        });

        console.log('Data: ', data);

        new App({
            data,
            el
        });
    });
};
