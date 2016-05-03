import Component from '../../js/modules/component';
import Templates from '../../js/templates';

class Header extends Component {
    init() {
        super.init();

        return this;
    }
}

Object.assign(Header.prototype, {
    template: Templates.header
});

export default Header;
