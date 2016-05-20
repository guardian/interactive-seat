import Block from '../../js/modules/Block';
import ResponsiveImage from '../responsive-image/responsive-image';
import template from './subhead.html!text';
import Video from '../video/video';

let Subhead = Block.extend({
    template,
    components: {
        ResponsiveImage,
        Video
    }
});

export default Subhead;
