import Challenges from '../../js/modules/Challenges';
import InteractiveInfo from '../interactive-info/interactive-info';
import template from './interactive-menu.html!text';
import Vue from 'vue';

import persona1 from '../../partials/persona-1.svg!text';
import persona2 from '../../partials/persona-2.svg!text';
import persona3 from '../../partials/persona-3.svg!text';

let InteractiveMenu = Vue.extend({
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
            challenges: Challenges.get()
        };
    },
    methods: {
        selectChallenge(challengeId) {
            this.$dispatch('challenge-selected', challengeId);
        }
    }
});

export default InteractiveMenu;
