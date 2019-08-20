import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Song } from './Song';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  readonly ROOT_URL = 'http://localhost:8080/api';
  searchResults: Observable<Song[]>;
  anyres: any;

  findByArtist(searchTerm: string){
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/byartist/artistName?artistName=' + searchTerm);
    return this.searchResults;
  }
  activereqs(){
    this.searchResults = this.http.get<Song[]>(this.ROOT_URL + '/activereqs');
    return this.searchResults;

  }
  rateUp(){
    console.log("rateUp");
  }

}
