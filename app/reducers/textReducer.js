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

const catState = {'game': 'NEVER_HAVE_I_EVER', 'category': 'BOTH', 'contents': _.shuffle([...sampled]), 'color': 'grey'};

const categoryChangeReducer = (state = catState, action) => {
    switch(action.type) {
        case types.CHANGE_GAME:
            let sample = [];
            if (action.game === 'NEVER_HAVE_I_EVER') {
                sample = _.shuffle([...sampledNever]);
            } else if (action.game === 'TRUTH_OR_DARE') {
                sample = _.shuffle([...sampledTruth]);
            }
            return Object.assign({}, state, {'game': action.game, 'contents': sample});
        case types.CHANGE_CATEGORY:
            let filtered = [];
            let bgcolor = '';
            const cat = action.category;
            if (cat === 'BOTH') {
                filtered = _.shuffle([state.contents]);
                bgcolor = 'grey';
            } else {
                filtered = _.filter(state.contents, (item) => {
                    return item.category === cat;
                });
                filtered = _.shuffle(filtered);
                if (cat === 'MILD') {
                    bgcolor = '#39CCCC';
                } else if (cat === 'WILD') {
                    bgcolor = 'pink';
                }
            }
            return {'game': action.game, 'category': action.category, 'contents': filtered, 'color': bgcolor};
        default:
            return state;
    }
};

export { textChangeReducer, categoryChangeReducer };
