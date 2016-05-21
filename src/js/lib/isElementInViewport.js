export default function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    let height = (rect.bottom - rect.top);
    let windowHeight = (window.innerHeight || document.documentElement.clientHeight);
    let windowWidth = (window.innerWidth || document.documentElement.clientWidth);
    let midPoint = rect.top + (height / 2);

    return (
        midPoint >= 0 &&
        rect.left >= 0 &&
        midPoint <= windowHeight &&
        rect.right <= windowWidth
    );
}
