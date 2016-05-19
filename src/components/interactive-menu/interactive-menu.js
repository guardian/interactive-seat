import Challenges from '../../js/modules/Challenges';
import InteractiveInfo from '../interactive-info/interactive-info';
import template from './interactive-menu.html!text';
import Vue from 'vue';

import patron1 from '../../partials/patron-1.svg!text';
import patron2 from '../../partials/patron-2.svg!text';
import patron3 from '../../partials/patron-3.svg!text';

let InteractiveMenu = Vue.extend({
    template,
    partials: {
        patron1,
        patron2,
        patron3
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
