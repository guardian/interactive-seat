import bowser from 'ded/bowser';

const MOBILE_THRESHOLD = 600;

export default function isMobile() {
    return (bowser.mobile || bowser.tablet || document.body.clientWidth < MOBILE_THRESHOLD) ? true : false;
}
