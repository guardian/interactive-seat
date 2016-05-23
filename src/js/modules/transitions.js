import Vue from 'vue';

import { cssAnimationEndEventName } from '../../js/lib/browser';
import { supportsCssAnimation } from '../../js/lib/support';

let addClass = function (className) {
    return function (el) {
        [].forEach.call(el.querySelectorAll('.animate'), (el) => {
            el.classList.add(className);
        });
    };
};

let transition = function (el, done) {
    // guard against lack of CSS animation support
    if (!supportsCssAnimation) {
        done();

        return;
    }

    let promises = [].map.call(el.querySelectorAll('.animate'), (el) => {
        let promise = new Promise((resolve) => {
            let eventHandler = () => {
                resolve(el);

                el.removeEventListener(cssAnimationEndEventName, eventHandler, false);
            };

            el.addEventListener(cssAnimationEndEventName, eventHandler, false);
        });

        return promise;
    });

    Promise.all(promises).then(done);
};

let removeClass = function (className) {
    return function (el) {
        [].forEach.call(el.querySelectorAll('.animate'), (el) => {
            el.classList.remove(className);
        });
    };
};

Vue.transition('interactive-view', {
    css: false,
    beforeEnter: addClass('enter'),
    enter: transition,
    afterEnter: removeClass('enter'),
    enterCancelled: removeClass('enter'),
    beforeLeave: addClass('leave'),
    leave: transition,
    afterLeave: removeClass('leave'),
    leaveCancelled: removeClass('leave')
});
