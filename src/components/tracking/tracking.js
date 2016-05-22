import loadScript from '../../js/lib/loadScript';
import Block from '../../js/modules/Block';
import template from './tracking.html!text';

const YOU_GOV_TRACKING_URL = 'https://tracker.yougov.com/campaign/11?name=inter';

let Tracking = Block.extend({
    template,
    data() {
        return {
            randomNumber: Math.random() * 10000000000000
        }
    },
    init() {
        loadScript(YOU_GOV_TRACKING_URL);
    }
});

export default Tracking;
