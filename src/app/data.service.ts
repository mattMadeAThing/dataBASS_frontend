import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Song } from './Song';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = 'http://localhost:8080/api';
  searchResults: Observable<Song[]>;
  anyres: Observable<any>;

  constructor(private http: HttpClient) { }

  // May go through ang change from string literals to HttpParams
  findByArtist(searchTerm: string) {
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/byartist/artistName?artistName=' + searchTerm);
    return this.searchResults;
  }
  findBySongName(searchTerm: string) {
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/bysong/songName?songName=' + searchTerm);
    return this.searchResults;
  }

  // Returns all songs with a boolean true in the "active" column in the database
  // to kill all active requests, use CURL and killallreqs.  Users SHOULD NOT have this permission(hence, not in this all at all)
  // Only big bo$$ dj man
  activereqs() {
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/activereqs');
    return this.searchResults;
  }

  submitRequest(songId: number) {
    // This is the best practice way to do PATCH/POST/UPDATE stuff. Don't fudge it with a get and put the data in the responsebody.
    this.http.patch(this.ROOT_URL + '/makeactive', songId)
    .subscribe(data => console.log(data + 'request success'));
    // This method  will break if we don't subscribe to the observable(observables are lazy and only execute when they are subscribed to)
  }
  rateUp(songId: number) {
    console.log('rateUp');
  }
}
