import {NEXT_TEXT, CHANGE_CATEGORY, BACK_TO_ZERO} from './types';

export function nextText() {
    return {
        type: NEXT_TEXT
    };
}

export function changeCategory(category) {
    return {
        type: CHANGE_CATEGORY,
        category
    };
}

export function backToZero() {
    return {
        type: BACK_TO_ZERO,

    };
}
