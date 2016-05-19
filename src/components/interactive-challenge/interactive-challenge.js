import Vue from 'vue';

import Challenges from '../../js/modules/Challenges';
import InteractiveInfo from '../interactive-info/interactive-info';
import InteractiveTask from '../interactive-task/interactive-task';
import template from './interactive-challenge.html!text';

let InteractiveChallenge = Vue.extend({
    template,
    components: {
        InteractiveInfo,
        InteractiveTask
    },
    props: ['challengeId', 'config'],
    data() {
        let challenge = Challenges.getById(this.challengeId);

        Object.assign(challenge, {
            currentTaskIndex: 0,
            numberOfTasks: challenge.tasks.length,
            numberOfTasksCorrect: 0
        });

        return challenge;
    },
    events: {
        'task-complete': function (isCorrect) {
            if (isCorrect) {
                this.numberOfTasksCorrect++;
            }

            this.nextTask();
        }
    },
    methods: {
        nextTask() {
            // TODO: pass customer emotion (neutral, happy, sad) into $dispatch

            let isFinalTask = (this.currentTaskIndex + 1 === this.numberOfTasks);

            if (isFinalTask) {
                this.$dispatch('challenge-completed', this.numberOfTasksCorrect);
            } else {
                this.currentTaskIndex = this.currentTaskIndex + 1;
            }
        }
    }
});

export default InteractiveChallenge;
