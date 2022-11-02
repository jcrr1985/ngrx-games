import { createReducer, on } from "@ngrx/store";
import * as actions from './loader.actions'

const initialState = false;

export const loaderReducer = createReducer(
    initialState,
    on(actions.loaderON, (state) => {
        return true;
    }),
    on(actions.loaderOff, (state) => {
        return false
    })
)