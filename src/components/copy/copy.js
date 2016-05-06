import component from '../../js/modules/component';
import templates from '../../js/templates';

let copy = Object.create(component);

Object.assign(copy, {
    template: templates.copy
});

export default copy;
