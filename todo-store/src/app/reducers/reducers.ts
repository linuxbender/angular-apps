import { Action } from '@ngrx/store';

export const ACTION_TODO_CREATE_ITEM = 'ACTION_TODO_CREATE_ITEM';
export const ACTION_TOTO_REMOVE_ITEM = 'ACTION_TOTO_REMOVE_ITEM';
export const ACTION_TOTO_CLEAR = 'ACTION_TOTO_CLEAR';

export const list = (state: string[], action: Action) => {
    switch (action.type) {
        case ACTION_TODO_CREATE_ITEM: return [...state, action.payload];
        case ACTION_TOTO_REMOVE_ITEM: return state.filter(item => item !== action.payload);
        case ACTION_TOTO_CLEAR: return [];
        default: return state;
    }
};
