import Vue from 'vue';

import Challenges from '../../js/modules/Challenges';
import events from '../../js/modules/events';
import template from './interactive-menu.html!text';

// Components
import Icon from '../icon/icon';
import InteractiveInfo from '../interactive-info/interactive-info';

// Partials
import patron1 from '../../partials/patron-1.svg!text';
import patron2 from '../../partials/patron-2.svg!text';
import patron3 from '../../partials/patron-3.svg!text';

let InteractiveMenu = Vue.extend({
    template,
    components: {
        Icon,
        InteractiveInfo
    },
    partials: {
        patron1,
        patron2,
        patron3
    },
    props: ['config'],
    data() {
        return {
            events,
            challenges: Challenges.get()
        };
    },
    methods: {
        selectChallenge(challengeId, numberOfTasks) {
            this.$dispatch('challenge-selected', challengeId, numberOfTasks);
        }
    }
});

export default InteractiveMenu;
