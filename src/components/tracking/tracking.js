import loadScript from '../../js/lib/loadScript';
import Component from '../../js/modules/component';
import Templates from '../../js/templates';

const YOU_GOV_TRACKING_URL = '//tracker.yougov.com/campaign/11?name=inter';

class Tracking extends Component {
    init() {
        this.config.randomNumber = Math.random() * 10000000000000;

        loadScript(YOU_GOV_TRACKING_URL);

        return this.render();
    }
}

Tracking.prototype.template = Templates.tracking;

export default Tracking;
