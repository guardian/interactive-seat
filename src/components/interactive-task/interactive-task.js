import Vue from 'vue';

import template from './interactive-task.html!text';

// Components
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';

// Task partials
import task1ShapeAngular from '../../partials/task-1-shape-angular.svg!text';import task1ShapeDefault from '../../partials/task-1-shape-default.svg!text';import task1ShapeRounded from '../../partials/task-1-shape-rounded.svg!text';import task1SmellAdd from '../../partials/task-1-smell-add.svg!text';import task1SmellDefault from '../../partials/task-1-smell-default.svg!text';import task1SmellNone from '../../partials/task-1-smell-none.svg!text';import task2WeightDefault from '../../partials/task-2-weight-default.svg!text';import task2WeightHeavy from '../../partials/task-2-weight-heavy.svg!text';import task2WeightLight from '../../partials/task-2-weight-light.svg!text';import task2SoundClassical from '../../partials/task-2-sound-classical.svg!text';import task2SoundDefault from '../../partials/task-2-sound-default.svg!text';import task2SoundNone from '../../partials/task-2-sound-none.svg!text';import task3ColourDefault from '../../partials/task-3-colour-default.svg!text';import task3ColourMono from '../../partials/task-3-colour-mono.svg!text';import task3ColourMulti from '../../partials/task-3-colour-multi.svg!text';import task3SoundDefault from '../../partials/task-3-sound-default.svg!text';import task3SoundLoud from '../../partials/task-3-sound-loud.svg!text';import task3SoundLow from '../../partials/task-3-sound-low.svg!text';

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
        Button,
        Icon
    },
    partials: {
        task1ShapeAngular,
        task1ShapeDefault,
        task1ShapeRounded,
        task1SmellAdd,
        task1SmellDefault,
        task1SmellNone,
        task2WeightDefault,
        task2WeightHeavy,
        task2WeightLight,
        task2SoundClassical,
        task2SoundDefault,
        task2SoundNone,
        task3ColourDefault,
        task3ColourMono,
        task3ColourMulti,
        task3SoundDefault,
        task3SoundLoud,
        task3SoundLow,
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
                return `task-${ this.challengeId }-${ this.task.id }-${ this.selectedOptionId }`;
            }

            return `task-${ this.challengeId }-${ this.task.id }-default`;
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
