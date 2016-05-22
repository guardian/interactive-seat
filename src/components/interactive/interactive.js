import cloneDeep from 'lodash.clonedeep';

import template from './interactive.html!text';
import challenges from '../../js/modules/challenges';
import patrons from '../../js/modules/patrons';

// Components
import Block from '../../js/modules/Block';
import InteractiveChallenge from '../interactive-challenge/interactive-challenge';
import InteractiveMenu from '../interactive-menu/interactive-menu';
import InteractiveResults from '../interactive-results/interactive-results';

let challengeComponents = challenges.reduce((accumulator, challenge) => {
    accumulator[`interactive-challenge-${ challenge.id }`] = InteractiveChallenge.extend({
        data() {
            return cloneDeep(challenge);
        }
    });

    return accumulator;
}, {});

let Interactive = Block.extend({
    template,
    components: Object.assign({
        InteractiveMenu,
        InteractiveResults
    }, challengeComponents),
    data() {
        return this.getInitialState();
    },
    methods: {
        getInitialState() {
            return {
                view: 'interactive-menu',
                challengeId: 1,
                numberOfChallenges: challenges.length,
                results: patrons.reduce((accumulator, patron) => {
                    accumulator[patron.id] = 0;

                    return accumulator;
                }, {})
            };
        },
        reset() {
            this.$data = this.getInitialState();

            return this;
        }
    },
    events: {
        'start': function () {
            this.view = `interactive-challenge-${ this.challengeId }`;
        },
        'challenge-complete': function (patronId, isCorrect) {
            if (isCorrect) {
                this.results[patronId] = this.results[patronId] + 1;
            }

            if (this.challengeId < challenges.length) {
                this.challengeId = this.challengeId + 1;

                this.view = `interactive-challenge-${ this.challengeId }`;
            } else {
                this.view = 'interactive-results';
            }
        },
        'restart': function () {
            this.reset();

            this.view = 'interactive-menu';
        }
    }
});

export default Interactive;
