import bowser from 'ded/bowser';

import { MOBILE_THRESHOLD } from '../modules/variables';

// NOTE: could be modularised later if needed elsewhere
const bodyEl = document.getElementsByTagName('body')[0];

export default function isMobile() {
    return (bowser.mobile || bowser.tablet || bodyEl.clientWidth < MOBILE_THRESHOLD) ? true : false;
}
