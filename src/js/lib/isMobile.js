import bowser from 'ded/bowser';

const MOBILE_THRESHOLD = 740;

export default function isMobile() {
    return (bowser.mobile || bowser.tablet || document.body.clientWidth < MOBILE_THRESHOLD) ? true : false;
}
