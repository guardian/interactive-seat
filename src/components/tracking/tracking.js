import loadScript from '../../js/lib/loadScript';
import component from '../../js/modules/component';
import templates from '../../js/templates';

const YOU_GOV_TRACKING_URL = '//tracker.yougov.com/campaign/11?name=inter';

let tracking = Object.create(component);

Object.assign(tracking, {
    template: templates.tracking,
    init() {
        component.init.apply(this, arguments);

        this.config.randomNumber = Math.random() * 10000000000000;

        loadScript(YOU_GOV_TRACKING_URL);

        return this;
    }
});

export default tracking;
