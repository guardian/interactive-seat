import Block from '../../js/modules/Block';
import InteractiveInfo from '../interactive-info/interactive-info';
import template from './interactive.html!text';

import persona1 from './partials/persona-1.svg!text';
import persona2 from './partials/persona-2.svg!text';
import persona3 from './partials/persona-3.svg!text';

const CHALLENGES = {
    persona: 'persona-1',
    factors: [
        {
            id: 'plate-shape',
            title: 'Plate Shape',
            choices: [
                {
                    id: 'angular',
                    title: 'Angular'
                },
                {
                    id: 'round',
                    title: 'Round'
                }
            ]
        },
        {
            id: 'plate-colour',
            title: 'Plate Colour',
            choices: [
                {
                    id: 'white',
                    title: 'White'
                },
                {
                    id: 'black',
                    title: 'Black'
                }
            ]
        }
    ]
};

let Interactive = Block.extend({
    template,
    partials: {
        'persona-1': persona1,
        'persona-2': persona2,
        'persona-3': persona3
    },
    components: {
        InteractiveInfo
    },
    data() {
        return {
            title: 'Play with your food',
            description: 'Experiment with presentation and atmosphere to see how they can impact the taste of your food',
            hasStarted: false
        };
    },
    methods: {
        start() {
            this.hasStarted = true;
        }
    }
});

export default Interactive;
