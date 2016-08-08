import bowser from 'ded/bowser';

const MOBILE_THRESHOLD = 740;
const TABLET_THRESHOLD = 980;

export function isMobile() {
    return (bowser.mobile || document.body.clientWidth < MOBILE_THRESHOLD);
}

export function isTablet() {
    return (bowser.tablet || document.body.clientWidth < TABLET_THRESHOLD);
}

export function isHandheld() {
    return (isMobile() || isTablet());
}

export function isCapable(isHandheld, bandwidth) {
    return (!isHandheld && bandwidth >= 2048);
}

export const cssAnimationEndEventName = (() => {
    const cssAnimationEndEventNames = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd'
    };

    let el = document.createElement('div');
    let i;

    for (i in cssAnimationEndEventNames) {
        if (i in el.style) {
            return cssAnimationEndEventNames[i];
        }
    }

    return undefined;
})();

export const [hiddenPropertyName, visibilityChangeEventName] = (() => {
    let prefixes = 'webkit moz ms o'.split(' ');
    let propertyName;
    let i;
    let j;

    if ('hidden' in document) {
        return [
            'hidden',
            'visibilitychange'
        ];
    }

    for (i = 0, j = prefixes.length; i < j; i++) {
        if ((propertyName = `${ prefixes[i] }Hidden`) in document) {
            return [
                propertyName,
                `${ prefixes[i] }visibilitychange`
            ];
        }
    }

    return [undefined, undefined];
})();

export default {
    cssAnimationEndEventName,
    hiddenPropertyName,
    visibilityChangeEventName
};

// console.log(
//     'cssAnimationEndEventName, hiddenPropertyName, visibilityChangeEventName',
//     cssAnimationEndEventName,
//     hiddenPropertyName,
//     visibilityChangeEventName
// );
