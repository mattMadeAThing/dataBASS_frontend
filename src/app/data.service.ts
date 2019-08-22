import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from './Song';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  readonly ROOT_URL = 'http://localhost:8080/api';
  searchResults: Observable<Song[]>;
  anyres: Observable<any>;

  constructor(private http: HttpClient) { }

  // may go through ang change from string literals to Params
  findByArtist(searchTerm: string){
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/byartist/artistName?artistName=' + searchTerm);
    return this.searchResults;
  }
  findBySongName(searchTerm: string){
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/bysong/songName?songName=' + searchTerm);
    return this.searchResults;
  }
  activereqs(){
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/activereqs');
    return this.searchResults;
  }
  submitRequest(songId: number){
    this.http.get(this.ROOT_URL + '/makeactive/id?id=' + songId).subscribe(data => console.log(data + 'request success'));
  }
  rateUp(songId: number){
    console.log("rateUp");
  }
}
