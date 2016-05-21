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
