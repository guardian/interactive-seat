import component from '../../js/modules/component';
import templates from '../../js/templates';

let navigation = Object.create(component);

Object.assign(navigation, {
    template: templates.navigation
});

export default navigation;
