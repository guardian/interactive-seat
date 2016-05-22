import Vue from 'vue';

import template from './interactive-challenge.html!text';

// Components
import Button from '../../components/button/button';
import Icon from '../../components/icon/icon';

// Challenge partials
import challenge1ShapeAngular from '../../partials/challenge-1-shape-angular.svg!text';import challenge1ShapeDefault from '../../partials/challenge-1-shape-default.svg!text';import challenge1ShapeRounded from '../../partials/challenge-1-shape-rounded.svg!text';import challenge2SmellAdd from '../../partials/challenge-2-smell-add.svg!text';import challenge2SmellDefault from '../../partials/challenge-2-smell-default.svg!text';import challenge2SmellNone from '../../partials/challenge-2-smell-none.svg!text';import challenge3WeightDefault from '../../partials/challenge-3-weight-default.svg!text';import challenge3WeightHeavy from '../../partials/challenge-3-weight-heavy.svg!text';import challenge3WeightLight from '../../partials/challenge-3-weight-light.svg!text';import challenge4SoundClassical from '../../partials/challenge-4-sound-classical.svg!text';import challenge4SoundDefault from '../../partials/challenge-4-sound-default.svg!text';import challenge4SoundNone from '../../partials/challenge-4-sound-none.svg!text';import challenge5SoundDefault from '../../partials/challenge-5-sound-default.svg!text';import challenge5SoundLoud from '../../partials/challenge-5-sound-loud.svg!text';import challenge5SoundLow from '../../partials/challenge-5-sound-low.svg!text';
import challenge6ColourDefault from '../../partials/challenge-6-colour-default.svg!text';
import challenge6ColourMono from '../../partials/challenge-6-colour-mono.svg!text';
import challenge6ColourMulti from '../../partials/challenge-6-colour-multi.svg!text';

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

let InteractiveChallenge = Vue.extend({
    template,
    components: {
        Button,
        Icon
    },
    partials: {
        challenge1ShapeAngular,
        challenge1ShapeDefault,
        challenge1ShapeRounded,
        challenge2SmellAdd,
        challenge2SmellDefault,
        challenge2SmellNone,
        challenge3WeightDefault,
        challenge3WeightHeavy,
        challenge3WeightLight,
        challenge4SoundClassical,
        challenge4SoundDefault,
        challenge4SoundNone,
        challenge5SoundDefault,
        challenge5SoundLoud,
        challenge5SoundLow,
        challenge6ColourDefault,
        challenge6ColourMono,
        challenge6ColourMulti,
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
        'numberOfChallenges',
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

            this.description = option.response;
        },
        onClickNextButton() {
            this.$dispatch('challenge-complete', this.patron.id, this.isCorrect);
        }
    },
    computed: {
        placeSettingPartialName() {
            if (typeof this.selectedOptionId !== 'undefined') {
                return `challenge-${ this.id }-${ this.type }-${ this.selectedOptionId }`;
            }

            return `challenge-${ this.id }-${ this.type }-default`;
        },
        patronPartialName() {
            if (this.isAnswered) {
                if (this.isCorrect) {
                    return `patron-${ this.patron.id }-happy`;
                }

                return `patron-${ this.patron.id }-sad`;
            }

            return `patron-${ this.patron.id }-neutral`;
        },
        buttonText() {
            if (this.id === this.numberOfChallenges) {
                return 'See how you did';
            } else if (this.id % 2 === 0) {
                return 'Next patron';
            } else {
                return 'Next challenge';
            }
        }
    }
});

export default InteractiveChallenge;
