import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom, interval, timer } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) {

  }
  gameListLoad() {
    return this.http.get(environment.list_url_games);
  }
  jackpotList() {
    return this.http.get(environment.jackpot_list);
  }

}
