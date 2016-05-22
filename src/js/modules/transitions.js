import Vue from 'vue';

import { cssAnimationEndEventName } from '../../js/lib/browser';
import { supportsCssAnimation } from '../../js/lib/support';

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

                    el.removeEventListener(cssAnimationEndEventName, eventHandler, false);
                };

                el.addEventListener(cssAnimationEndEventName, eventHandler, false);
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
