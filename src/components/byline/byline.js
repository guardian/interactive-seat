import component from '../../js/modules/component';
import templates from '../../js/templates';

let byline = Object.create(component);

Object.assign(byline, {
    template: templates.byline
});

export default byline;
