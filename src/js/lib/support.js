let supportsCssAnimation = function () {
    let support = false;
    let domPrefixes = 'Webkit Moz O ms Khtml'.split(' ');
    let el = document.createElement('div');
    let i;
    let j;

    if (el.style.animationName !== undefined) {
        return true;
    }

    for (i = 0, j = domPrefixes.length; i < j; i++) {
        if (el.style[`${ domPrefixes[i] }AnimationName`] !== undefined) {
            support = true;

            break;
        }
    }

    return support;
};

export default {
    cssAnimation: supportsCssAnimation()
};
