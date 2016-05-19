import Vue from 'vue';

import template from './interactive-task.html!text';

// Components
import Button from '../../components/button/button';

// Place setting partials
import placeSettingNormal from '../../partials/place-setting-normal.svg!text';
import placeSettingHeavy from '../../partials/place-setting-heavy.svg!text';
import placeSettingLight from '../../partials/place-setting-light.svg!text';

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

let InteractiveTask = Vue.extend({
    template,
    components: {
        Button
    },
    partials: {
        placeSettingNormal,
        placeSettingHeavy,
        placeSettingLight,
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
        'task',
        'index',
        'numberOfTasks',
        'challengeId',
        'config'
    ],
    data() {
        return {
            isAnswered: false,
            isCorrect: false,
            selectedOptionId: undefined
        };
    },
    methods: {
        onMouseOverOption(optionId) {
            if (this.isAnswered) {
                return false;
            }

            this.selectedOptionId = optionId;
        },
        onMouseOutOption() {
            if (this.isAnswered) {
                return false;
            }

            this.selectedOptionId = undefined;
        },
        onSelectOption(option) {
            if (this.isAnswered) {
                return false;
            }

            this.isAnswered = true;

            this.selectedOptionId = option.id;

            this.isCorrect = option.isCorrect;

            this.task.description = option.response;
        },
        onClickNextButton() {
            this.$dispatch('task-complete', this.isCorrect);
        }
    },
    computed: {
        placeSettingPartialName() {
            if (typeof this.selectedOptionId !== 'undefined') {
                return `place-setting-${ this.selectedOptionId }`;
            }

            return 'place-setting-normal';
        },
        patronPartialName() {
            if (this.isAnswered) {
                if (this.isCorrect) {
                    return `patron-${ this.challengeId }-happy`;
                }

                return `patron-${ this.challengeId }-sad`;
            }

            return `patron-${ this.challengeId }-neutral`;
        }
    }
});

export default InteractiveTask;
