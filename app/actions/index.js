import {NEXT_TEXT, CHANGE_CATEGORY, BACK_TO_ZERO, CHANGE_GAME}  from './types';

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

export function changeGame(game) {
    return {
        type: CHANGE_GAME,
        game
    };
}

export function backToZero() {
    return {
        type: BACK_TO_ZERO,

    };
}
