import { hiddenPropertyName } from '../../js/lib/browser';
import { supportsPageVisibility } from '../../js/lib/support';

export default function pageIsVisible() {
    if (supportsPageVisibility) {
        return !document[hiddenPropertyName];
    }

    return true;
}
