import Vue from 'vue';

import events from '../../js/modules/events';
import template from './interactive-results.html!text';

// Components
import Button from '../button/button';
import Icon from '../icon/icon';
import InteractiveInfo from '../interactive-info/interactive-info';
import Share from '../share/share';

// Patron partials
import patron1Neutral from '../../partials/patron-1-neutral.svg!text';
import patron1Happy from '../../partials/patron-1-happy.svg!text';
import patron1Sad from '../../partials/patron-1-sad.svg!text';
import patron2Neutral from '../../partials/patron-2-neutral.svg!text';
import patron2Happy from '../../partials/patron-2-happy.svg!text';
import patron2Sad from '../../partials/patron-2-sad.svg!text';
import patron3Neutral from '../../partials/patron-3-neutral.svg!text';
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
        patron1Neutral,
        patron1Happy,
        patron1Sad,
        patron2Neutral,
        patron2Happy,
        patron2Sad,
        patron3Neutral,
        patron3Happy,
        patron3Sad
    },
    props: [
        'results',
        'config'
    ],
    data() {
        let patrons = [];
        let numberCorrect;
        let totalCorrect = 0;
        let patronId;
        let title;
        let description;
        let shareText;

        for (patronId in this.results) {
            numberCorrect = this.results[patronId];

            totalCorrect += numberCorrect;

            if (numberCorrect === 2) {
                patrons.push(`patron-${ patronId }-happy`);
            } else if (numberCorrect === 1) {
                patrons.push(`patron-${ patronId }-neutral`);
            } else {
                patrons.push(`patron-${ patronId }-sad`);
            }
        }

        if (totalCorrect > 4) {
            title = 'Well done: you successfully used science to influence your diners’ perception of flavour in their meals!';
            description = '(A long, successful career in neurogastronomy awaits you.)';
            shareText = 'I changed my taste buds using the power of neurogastronomy! Can you?';
        } else if (totalCorrect > 2) {
            title = 'Not too bad. You managed to somewhat influence their perception of the flavours in the meal.';
            description = '(The important thing is that you learned something.)';
            shareText = 'Science can play with your taste buds to alter the way things taste – do you know how?';
        } else {
            title = 'Ah, sorry. You failed to enhance their meals with multi-sensory dining.';
            description = '(I guess neurogastronomy isn’t for everyone…)';
            shareText = 'Science can play with your taste buds to alter the way things taste – do you know how?';
        }

        return {
            patrons,
            title,
            description,
            shareText,
            shareEvents: {
                SHARE_FACEBOOK: events.SHARE_INT_FACEBOOK,
                SHARE_TWITTER: events.SHARE_INT_TWITTER,
                SHARE_EMAIL: events.SHARE_INT_EMAIL
            }
        };
    },
    methods: {
        onClickRestartButton() {
            this.$dispatch('restart');
        }
    }
});

export default InteractiveResults;
