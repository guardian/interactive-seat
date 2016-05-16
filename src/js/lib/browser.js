// Function from David Walsh: http://davidwalsh.name/css-animation-callback
let getCssAnimationEndEventName = function () {
    let eventName;
    let el = document.createElement('div');

    const animationEndEventNames = {
        animation: 'animationend',
        OAnimation: 'oAnimationEnd',
        MozAnimation: 'animationend',
        WebkitAnimation: 'webkitAnimationEnd'
    };

    for (eventName in animationEndEventNames){
        if (el.style[eventName] !== undefined){
            return animationEndEventNames[eventName];
        }
    }
};

export default {
    cssAnimationEndEventName: getCssAnimationEndEventName()
};
