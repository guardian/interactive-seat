import Block from '../../js/modules/Block';
import Icon from '../icon/icon';
import template from './navigation.html!text';

let Navigation = Block.extend({
    template,
    components: {
        Icon
    }
});

export default Navigation;
