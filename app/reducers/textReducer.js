import * as types from '../actions/types';
import { _ } from 'underscore';
import content from '../content';
const sampled = _.sample(content, content.length);

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

const catState = {'category': 'BOTH', 'contents': _.shuffle([...sampled]), 'color': 'grey'};

const categoryChangeReducer = (state = catState, action) => {
    switch(action.type) {
        case types.CHANGE_CATEGORY:
            let filtered = [];
            let bgcolor = '';
            const cat = action.category;
            if (cat === 'BOTH') {
                filtered = _.shuffle([...sampled]);
                bgcolor = 'grey';
            } else {
                filtered = _.filter(sampled, (item) => {
                    return item.category === cat;
                });
                filtered = _.shuffle(filtered);
                if (cat === 'MILD') {
                    bgcolor = '#39CCCC';
                } else if (cat === 'WILD') {
                    bgcolor = 'pink';
                }
            }
            return {'category': action.category, 'contents': filtered, 'color': bgcolor};
        default:
            return state;
    }
};

export { textChangeReducer, categoryChangeReducer };
