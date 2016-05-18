import browser from './browser';
import support from './support';

export default function animate (el, className) {
    // guard against lack of CSS animation support
    if (!support.cssAnimation) {
        return new Promise((resolve) => resolve());
    }

    let promise = new Promise((resolve) => {
        let eventHandler = () => {
            resolve();

            el.removeEventListener(browser.cssAnimationEndEventName, eventHandler, false);
        };

        el.addEventListener(browser.cssAnimationEndEventName, eventHandler, false);
    });

    [].forEach.call(el.classList, (className) => {
        if (className.indexOf('animate--') !== -1) {
            el.classList.remove(className);
        }
    });

    el.classList.add(className);

    return promise;
}
