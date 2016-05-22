import Vue from 'vue';

import events from '../../js/modules/events';
import template from './interactive-results.html!text';

// Components
import Button from '../button/button';
import Icon from '../icon/icon';
import InteractiveInfo from '../interactive-info/interactive-info';
import Share from '../share/share';

// Patron partials
import patron1TallNeutral from '../../partials/patron-1-tall-neutral.svg!text';
import patron1TallHappy from '../../partials/patron-1-tall-happy.svg!text';
import patron1TallSad from '../../partials/patron-1-tall-sad.svg!text';
import patron2TallNeutral from '../../partials/patron-2-tall-neutral.svg!text';
import patron2TallHappy from '../../partials/patron-2-tall-happy.svg!text';
import patron2TallSad from '../../partials/patron-2-tall-sad.svg!text';
import patron3TallNeutral from '../../partials/patron-3-tall-neutral.svg!text';
import patron3TallHappy from '../../partials/patron-3-tall-happy.svg!text';
import patron3TallSad from '../../partials/patron-3-tall-sad.svg!text';

let InteractiveResults = Vue.extend({
    template,
    components: {
        Button,
        Icon,
        InteractiveInfo,
        Share
    },
    partials: {
        patron1TallNeutral,
        patron1TallHappy,
        patron1TallSad,
        patron2TallNeutral,
        patron2TallHappy,
        patron2TallSad,
        patron3TallNeutral,
        patron3TallHappy,
        patron3TallSad
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
                patrons.push(`patron-${ patronId }-tall-happy`);
            } else if (numberCorrect === 1) {
                patrons.push(`patron-${ patronId }-tall-neutral`);
            } else {
                patrons.push(`patron-${ patronId }-tall-sad`);
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
