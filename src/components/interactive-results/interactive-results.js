import Vue from 'vue';

import Button from '../button/button';
import InteractiveInfo from '../interactive-info/interactive-info';
import Share from '../share/share';
import template from './interactive-results.html!text';

// Patron partials
import patron1Happy from '../../partials/patron-1-happy.svg!text';
import patron1Sad from '../../partials/patron-1-sad.svg!text';
import patron2Happy from '../../partials/patron-2-happy.svg!text';
import patron2Sad from '../../partials/patron-2-sad.svg!text';
import patron3Happy from '../../partials/patron-3-happy.svg!text';
import patron3Sad from '../../partials/patron-3-sad.svg!text';

let InteractiveResults = Vue.extend({
    template,
    components: {
        Button,
        InteractiveInfo,
        Share
    },
    partials: {
        patron1Happy,
        patron1Sad,
        patron2Happy,
        patron2Sad,
        patron3Happy,
        patron3Sad
    },
    props: [
        'numberOfTasks',
        'numberOfTasksCorrect',
        'challengeId',
        'config'
    ],
    data() {
        let patronPartialName;

        if (this.numberOfTasksCorrect === this.numberOfTasks) {
            patronPartialName = `patron-${ this.challengeId }-happy`;
        } else {
            patronPartialName = `patron-${ this.challengeId }-sad`;
        }

        return {
            description: `You only got ${ this.numberOfTasksCorrect } out of ${ this.numberOfTasks } correct`,
            patronPartialName: patronPartialName
        };
    },
    methods: {
        onClickRestartButton() {
            this.$dispatch('restart');
        }
    }
});

export default InteractiveResults;
