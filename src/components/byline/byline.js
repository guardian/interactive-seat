import events from '../../js/modules/events';
import template from './byline.html!text';

// Components
import Block from '../../js/modules/Block';
import Share from '../share/share';

let Byline = Block.extend({
    template,
    components: {
        Share
    },
    data() {
        return {
            shareEvents: {
                SHARE_FACEBOOK: events.SHARE_FACEBOOK,
                SHARE_TWITTER: events.SHARE_TWITTER,
                SHARE_EMAIL: events.SHARE_FACEBOOK
            }
        };
    }
});

export default Byline;
