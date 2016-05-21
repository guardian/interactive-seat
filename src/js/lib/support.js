import { cssAnimationEndEventName, hiddenPropertyName } from './browser';

export const supportsCssAnimation = (cssAnimationEndEventName !== undefined);

export const supportsPageVisibility = (hiddenPropertyName !== undefined);

export default {
    supportsCssAnimation,
    supportsPageVisibility
};
