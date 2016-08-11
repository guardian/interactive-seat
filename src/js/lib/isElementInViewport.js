// NOTE: Threshold parameter is a value between 0 and 1 representative of the
// percentage of the element that should be in view for it to give a positive result.
export default function isElementInViewport(el, threshold = 1) {
    let rect = el.getBoundingClientRect();
    let height = (rect.bottom - rect.top);
    let top = rect.top + ((1 - threshold) * height);
    let bottom = rect.bottom - ((1 - threshold) * height);
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return (
        (top >= 0 && top <= windowHeight) ||
        (bottom >= 0 && bottom <= windowHeight) ||
        (top <= 0 && bottom >= windowHeight)
    );
}
