import { createReducer, on } from "@ngrx/store";
import * as actions from './game.action';
import { Game } from "../interface/game.interface";
import { AppState } from "../interface/app.interface";
import { categories } from "../another/auxdata";
import { Category } from "../interface/category.interface";

const initialState: AppState = {
    categories: categories,
    categorySelected: categories[1],
    gameList: [],
    jackpots: []
}


export const gameReducer = createReducer(
    initialState,
    // LoadGames
    on(actions.loadGames, state => state),
    // Load Games success
    on(actions.loadGameSuccess, (state, { list }) => {
        let newState: AppState = { ...state }
        newState = validatingCategory(newState, list);
        return newState
    }),
    // Load Games Error
    on(actions.loadGameError, (state, props) => state),
    // Select Category
    on(actions.selectCategory, (state, props) => {
        let newState = { ...state }
        newState.categorySelected = props.categorySelected;
        return newState
    }),
    // init jackpot load
    on(actions.loadJackpots, state => state),
    // jackpot load success
    on(actions.loadJackpotsSuccess, (state, payload) => {
        let newState = { ...state }
        newState.jackpots = payload.list;
        return newState;
    })
)

/**
 * 
 * @param categorySelected 
 * @param listGame 
 * @returns {Game[]} array filtered
 */
const validatingCategory = (appState: AppState, listGame: Game[]) => {
    let games: any[] = []
    if (appState.categorySelected.name == 'Jackpots') {
        const jackpots = appState.jackpots.map(e => e.game);
        games = listGame.filter(e => jackpots.includes(e.id))
    } else {
        games = listGame.filter(e => {
            for (let x of appState.categorySelected.value) {
                if (e.categories.includes(x)) return true;
            }
            return false;
        })

    }
    appState.gameList = games;
    return appState;
}