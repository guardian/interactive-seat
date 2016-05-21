import events from '../../js/modules/events';
import template from './navigation.html!text';

// Components
import Block from '../../js/modules/Block';
import Icon from '../icon/icon';

let Navigation = Block.extend({
    template,
    components: {
        Icon
    },
    data() {
        return {
            events
        };
    }
});

export default Navigation;
