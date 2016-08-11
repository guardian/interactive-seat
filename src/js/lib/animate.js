import { cssAnimationEndEventName } from './browser';
import { supportsCssAnimation } from './support';

const eventHandlers = {};
let id = 0;

export default function animate(el, className) {
    // guard against lack of CSS animation support
    if (!supportsCssAnimation) {
        return new Promise((resolve) => resolve());
    }

    if (typeof el._animateId === 'undefined') {
        el._animateId = id++;
    } else {
        let oldEventHandler = eventHandlers[el._animateId];

        if (typeof oldEventHandler === 'function') {
            oldEventHandler();
        }
    }

    [].forEach.call(el.classList, (className) => {
        if (typeof className === 'string' && className.indexOf('animate--') !== -1) {
            el.classList.remove(className);
        }
    });

    el.classList.add(className);

    return new Promise((resolve) => {
        let eventHandler = () => {
            resolve();

            el.removeEventListener(cssAnimationEndEventName, eventHandler, false);

            el.classList.remove(className);

            delete eventHandlers[el._animateId];
        };

        eventHandlers[el._animateId] = eventHandler;

        el.addEventListener(cssAnimationEndEventName, eventHandler, false);
    });
}
