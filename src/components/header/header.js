import Component from '../../js/modules/component';
import Templates from '../../js/templates';

class Header extends Component {
    init() {
        super.init();

        this.$el.css({ color: 'red' });

        return this;
    }
}

Object.assign(Header.prototype, {
    template: Templates.header
});

export default Header;
