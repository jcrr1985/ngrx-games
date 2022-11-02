import { createAction, props } from "@ngrx/store";
import { Category } from "../interface/category.interface";
import { Game } from "../interface/game.interface";
import { Jackpot } from "../interface/jackpot.interface";
export const loadGames = createAction('LOAD GAME LIST');
export const loadGameSuccess = createAction('GAME LIST LOAD SUCCESS', props<{ list: Game[] }>());
export const loadGameError = createAction('GAME LIST LOAD ERROR', props<{ error: any }>());

export const loadJackpots = createAction('LOAD JACKPOT LIST');
export const loadJackpotsSuccess = createAction('JACKPOT LIST LOAD SUCCESS', props<{ list: Jackpot[] }>());
export const loadJackpotError = createAction('JACKPOT LIST LOAD ERROR', props<{ error: any }>());

export const loadCategories = createAction('LOAD CATEGORIES LIST');
export const loadCategoriesSuccess = createAction('LOAD CATEGORIES SUCCESS');
export const loadCategoriesError = createAction('LOAD CATEGORIES Error');

export const selectCategory = createAction('SELECT CATEGORY', props<{ categorySelected: Category }>());
