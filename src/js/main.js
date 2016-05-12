import App from '../components/app/app';
import cleanData from './lib/cleanData';
import fetchJSON from './lib/fetch';
// import getNetworkSpeed from './lib/getNetworkSpeed';

const CONTENT_URL = 'https://interactive.guim.co.uk/docsdata-test/1ukLv0mLRiysvsraIUv-izI4BFEsv42_OrwNGxQIOGwY.json';

export let init = function(el) {
    fetchJSON(CONTENT_URL)
        .then((data) => cleanData(data))
        .then((data) => {
            new App({
                data,
                el
            });
        });
};
