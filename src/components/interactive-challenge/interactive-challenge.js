import Challenges from '../../js/modules/Challenges';
import InteractiveInfo from '../interactive-info/interactive-info';
import InteractiveObject from '../interactive-object/interactive-object';
import template from './interactive-challenge.html!text';
import Vue from 'vue';

let InteractiveChallenge = Vue.extend({
    template,
    components: {
        InteractiveInfo,
        InteractiveObject
    },
    props: ['challengeId', 'config'],
    data() {
        return Challenges.getById(this.challengeId);
    },
    events: {
        'option-selected': function() {
            if (this.isComplete()) {
                this.$dispatch('challenge-completed');
            } else {
                this.useTry();
            }
        }
    },
    methods: {
        isComplete() {
            // 1. Select only the `InteractiveObject` child components
            // 2. Return false if there are any incorrect options selected
            return this.$children
                       .filter((child) => child instanceof InteractiveObject)
                       .every((child) => child.selectedOption && child.selectedOption.correct === true);
        },
        useTry() {
            this.numberOfTries = this.numberOfTries - 1;

            if (this.numberOfTries === 0) {
                this.$dispatch('challenge-failed');
            }
        }
    }
});

export default InteractiveChallenge;
