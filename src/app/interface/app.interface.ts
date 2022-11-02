import { Category } from "./category.interface";
import { Game } from "./game.interface";
import { Jackpot } from "./jackpot.interface";

export interface AppState {
    categories: Category[],
    categorySelected: Category;
    gameList: Game[],
    jackpots: Jackpot[];
}