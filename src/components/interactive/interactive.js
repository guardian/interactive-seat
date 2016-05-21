import Vue from 'vue';

import Block from '../../js/modules/Block';
import browser from '../../js/lib/browser';
import InteractiveChallenge from '../interactive-challenge/interactive-challenge';
import InteractiveMenu from '../interactive-menu/interactive-menu';
import InteractiveResults from '../interactive-results/interactive-results';
import { supportsCssAnimation } from '../../js/lib/support';
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
            challengeId: 1,
            numberOfTasks: 0,
            numberOfTasksCorrect: 0
        };
    },
    events: {
        'challenge-selected': function (challengeId, numberOfTasks) {
            this.challengeId = challengeId;

            this.numberOfTasks = numberOfTasks;

            this.view = 'interactive-challenge';
        },
        'challenge-completed': function (numberOfTasksCorrect) {
            this.numberOfTasksCorrect = numberOfTasksCorrect;

            this.view = 'interactive-results';
        },
        'restart': function () {
            this.view = 'interactive-menu';
        }
    }
});

let transition = function (className) {
    return function (el, done) {
        // guard against lack of CSS animation support
        if (!supportsCssAnimation) {
            done();

            return;
        }

        let promises = [].map.call(el.querySelectorAll('.animate'), (el) => {
            let promise = new Promise((resolve) => {
                let eventHandler = () => {
                    resolve();

                    el.classList.remove(className);

                    el.removeEventListener(browser.cssAnimationEndEventName, eventHandler, false);
                };

                el.addEventListener(browser.cssAnimationEndEventName, eventHandler, false);
            });

            el.classList.add(className);

            return promise;
        });

        Promise.all(promises).then(done);
    };
};

let cancelTransition = function (className) {
    return function (el) {
        [].forEach.call(el.querySelectorAll('.animate'), (el) => {
            el.classList.remove(className);
        });
    };
};

Vue.transition('interactive-view', {
    css: false,
    enter: transition('enter'),
    enterCancelled: cancelTransition('enter'),
    leave: transition('leave'),
    leaveCancelled: cancelTransition('leave')
});

export default Interactive;
