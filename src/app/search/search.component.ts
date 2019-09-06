import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Song } from '../Song';
import { timeout } from 'q';
import { PageEvent } from '@angular/material';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private data: DataService) { }
  timeHandl: TimerHandler;
  resultSet: Observable<Song[]>;
  activeRequests: Observable<Song[]>;
  allowLoop: boolean;
  song: Song;
  ngOnInit() {

  }

  searchByArtist(searchTerm: string) {
    this.resultSet = this.data.findByArtist(searchTerm);
  }
  searchBySongName(songName: string) {
    this.resultSet = this.data.findBySongName(songName);
  }

  requestSong(songId: number) {
    this.data.submitRequest(songId);
    this.activeRequests = this.data.activereqs();
  }

  refreshLoop() {
    this.allowLoop = false;
    this.refreshReqs();
    // In production, change setTimeout to setInterval
    setTimeout(() => {this.refreshReqs(); }, 15000);
  }

  refreshReqs() {
    console.log("refReqsMethodTriggered");
    this.activeRequests = this.data.activereqs();
  }
}
