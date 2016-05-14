import Block from '../../js/modules/Block';
import InteractiveChallenge from '../interactive-challenge/interactive-challenge';
import InteractiveMenu from '../interactive-menu/interactive-menu';
import InteractiveResults from '../interactive-results/interactive-results';
import template from './interactive.html!text';

let Interactive = Block.extend({
    template,
    components: {
        InteractiveChallenge,
        InteractiveMenu,
        InteractiveResults
    },
    data() {
        return {
            view: 'interactive-menu',
            challengeCompleted: false,
            challengeId: 1
        };
    },
    events: {
        'challenge-selected': function (challengeId) {
            this.challengeId = challengeId;

            this.view = 'interactive-challenge';
        },
        'challenge-completed': function () {
            this.challengeCompleted = true;

            this.view = 'interactive-results';
        },
        'challenge-failed': function () {
            this.challengeCompleted = false;

            this.view = 'interactive-results';
        },
        'restart': function () {
            this.view = 'interactive-menu';
        }
    }
});

export default Interactive;
