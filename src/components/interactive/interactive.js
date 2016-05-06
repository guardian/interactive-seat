import component from '../../js/modules/component';
import templates from '../../js/templates';

let interactive = Object.create(component);

Object.assign(interactive, {
    template: templates.interactive
});

export default interactive;
