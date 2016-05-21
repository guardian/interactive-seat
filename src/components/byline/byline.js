import template from './byline.html!text';

// Components
import Block from '../../js/modules/Block';
import Share from '../share/share';

let Byline = Block.extend({
    template,
    components: {
        Share
    }
});

export default Byline;
