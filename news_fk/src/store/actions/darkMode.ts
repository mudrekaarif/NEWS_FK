import * as actionTypes from './actionTypes';

export interface flipDarkModeAction {
    type: typeof actionTypes.FLIP_DARK_MODE;
};

export const flipDarkMode = () => {
    return {
        type: actionTypes.FLIP_DARK_MODE
    };
};

export type appModeAction = flipDarkModeAction;