import Vue from 'vue';

import events from '../../js/modules/events';
import template from './interactive-results.html!text';

// Components
import Button from '../button/button';
import Icon from '../icon/icon';
import InteractiveInfo from '../interactive-info/interactive-info';
import Share from '../share/share';

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
        Icon,
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
        let playerWonGame = this.numberOfTasksCorrect === this.numberOfTasks;
        let shareEvents = {
            SHARE_FACEBOOK: events.SHARE_INT_FACEBOOK,
            SHARE_TWITTER: events.SHARE_INT_TWITTER,
            SHARE_EMAIL: events.SHARE_INT_FACEBOOK
        };

        if (playerWonGame) {
            return {
                shareEvents,
                title: 'Well done: you successfully used science to influence your diners’ perception of flavour in their meals!',
                description: '(A long, successful career in neurogastronomy awaits you.)',
                shareText: 'I changed my taste buds using the power of neurogastronomy!',
                patronPartialName: `patron-${ this.challengeId }-happy`
            };
        }

        return {
            shareEvents,
            title: 'Ah, sorry. You failed to enhance their meals with multi-sensory dining.',
            description: '(I guess neurogastronomy isn’t for everyone…)',
            shareText: 'Science can play with your taste buds to alter the way things taste – do you know how?',
            patronPartialName: `patron-${ this.challengeId }-sad`
        };
    },
    methods: {
        onClickRestartButton() {
            this.$dispatch('restart');
        }
    }
});

export default InteractiveResults;
