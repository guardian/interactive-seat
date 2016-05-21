import { cssAnimationEndEventName } from './browser';
import { supportsCssAnimation } from './support';

export default function animate (el, className) {
    // guard against lack of CSS animation support
    if (!supportsCssAnimation) {
        return new Promise((resolve) => resolve());
    }

    let promise = new Promise((resolve) => {
        let eventHandler = () => {
            resolve();

            el.removeEventListener(cssAnimationEndEventName, eventHandler, false);
        };

        el.addEventListener(cssAnimationEndEventName, eventHandler, false);
    });

    [].forEach.call(el.classList, (className) => {
        if (className.indexOf('animate--') !== -1) {
            el.classList.remove(className);
        }
    });

    el.classList.add(className);

    return promise;
}
