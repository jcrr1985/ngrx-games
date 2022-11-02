import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap, timer } from 'rxjs';
import { GameService } from '../services/game.service';
import * as actions from './game.action'
import * as actionsLoader from './loader.actions'

@Injectable()
export class GameEffects {

    loaderON$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadGames),
        map(() => actionsLoader.loaderON())
    ));

    loadGames$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadGames),
        mergeMap(() => this.service.gameListLoad()
            .pipe(
                map((games: any) => actions.loadGameSuccess({ list: games })),
                catchError(() => EMPTY)
            )),
    ));


    loadjackpots$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadGames),
        mergeMap(() => this.service.jackpotList()
            .pipe(
                map((jackpots: any) => actions.loadJackpotsSuccess({ list: jackpots })),
                catchError(() => EMPTY)
            )),
    ));

    loaderOff$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadGameSuccess),
        mergeMap(() =>
            timer(2000).pipe(
                map(() => actionsLoader.loaderOff()),
            ))
    ));

    selectCategory$ = createEffect(() => this.actions$.pipe(
        ofType(actions.selectCategory),
        mergeMap(() => this.service.gameListLoad()
            .pipe(
                map(() => actions.loadGames()),
                catchError(() => EMPTY)
            ))
    ));

    loadJackpots$ = createEffect(() => this.actions$.pipe(
        ofType(actions.loadJackpots),
        mergeMap(() => this.service.jackpotList()
            .pipe(
                map((jackpots: any) => actions.loadJackpotsSuccess({ list: jackpots })),
                catchError(() => EMPTY)
            )),
    ));

    constructor(
        private actions$: Actions,
        private service: GameService
    ) { }
}