import component from '../../js/modules/component';
import templates from '../../js/templates';

let header = Object.create(component);

Object.assign(header, {
    template: templates.header
});

export default header;
