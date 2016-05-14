import Block from '../../js/modules/Block';
import Share from '../share/share';
import template from './byline.html!text';

let Byline = Block.extend({
    template,
    components: {
        Share
    }
});

export default Byline;
