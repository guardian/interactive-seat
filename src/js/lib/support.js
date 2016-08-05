import { cssAnimationEndEventName, hiddenPropertyName } from './browser';

export const supportsCssAnimation = (cssAnimationEndEventName !== undefined);

export const supportsPageVisibility = (hiddenPropertyName !== undefined);

export const supportsLocalStorage = (() => {
    const test = 'test';

    try {
        localStorage.setItem(test, test);
        localStorage.removeItem(test);

        return true;
    } catch(e) {
        return false;
    }
})();

export default {
    supportsCssAnimation,
    supportsPageVisibility,
    supportsLocalStorage
};

// console.log(
//     '(supportsCssAnimation, supportsPageVisibility, supportsLocalStorage)',
//     supportsCssAnimation,
//     supportsPageVisibility,
//     supportsLocalStorage
// );
