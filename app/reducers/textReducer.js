import * as types from '../actions/types';
import { _ } from 'underscore';
import content from '../content';
import truthOrDare from '../truthOrDare';
import neverHaveIEver from '../neverHaveIEver';
const sampled = _.sample(content, content.length);
const sampledNever = _.sample(neverHaveIEver, neverHaveIEver.length);
const sampledTruth = _.sample(truthOrDare, truthOrDare.length);

const textChangeReducer = (state = 0, action) => {
    switch(action.type) {
        case types.NEXT_TEXT:
            return state + 1;
        case types.BACK_TO_ZERO:
            return 0;
        default:
            return state;
    }
};

const catState = {'game': '', 'category': 'BOTH', 'contents': _.shuffle([...sampled]), 'categorySet': ['MILD', 'WILD', 'BOTH'], 'color': 'grey'};

function categorizeSample(game) {
    let sample = [];
    if (game === 'NEVER_HAVE_I_EVER') {
        sample = _.shuffle([...sampledNever]);
    } else if (game === 'TRUTH_OR_DARE') {
        sample = _.shuffle([...sampledTruth]);
    }
    return sample;
}

function createCategorySet(game) {
    let categorySet = [];
    if (game === 'NEVER_HAVE_I_EVER') {
        categorySet = ['MILD', 'WILD', 'BOTH'];
    } else if (game === 'TRUTH_OR_DARE') {
        categorySet = ['TRUTH', 'DARE', 'BOTH'];
    }
    return categorySet;
}

const categoryChangeReducer = (state = catState, action) => {
    switch(action.type) {
        case types.CHANGE_GAME:
            let sample = [];
            let newCategorySet = [];
            sample = categorizeSample(action.game);
            newCategorySet = createCategorySet(action.game);
            return Object.assign({}, state, {'game': action.game, 'contents': sample, 'categorySet': newCategorySet, 'category': 'BOTH', 'color': '#443B83'});
        case types.CHANGE_CATEGORY:
            let filtered = [];
            let bgcolor = '';
            let newContent = [];
            const cat = action.category;
            newContent = categorizeSample(state.game);
            if (cat === '2') {
                filtered = newContent;
                bgcolor = '#443B83';
            } else {
                filtered = _.filter(newContent, (item) => {
                    return item.category === state.categorySet[cat];
                });
                filtered = _.shuffle(filtered);
                if (cat === '0') {
                    bgcolor = '#287CA7';
                } else if (cat === '1') {
                    bgcolor = '#9A0951';
                }
            }
            console.log('STATE', state);
            return Object.assign({}, state, {'category': action.category, 'contents': filtered, 'color': bgcolor});
        default:
            return state;
    }
};

export { textChangeReducer, categoryChangeReducer };
