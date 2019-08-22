import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { Song } from '../Song';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private data: DataService) { }

  resultSet: Observable<Song[]>;
  activeRequests: Observable<Song[]>;
  song: Song;
  ngOnInit() {

  }

  searchByArtist(searchTerm: string){
    this.resultSet = this.data.findByArtist(searchTerm);
  }
  searchBySongName(songName: string){
    this.resultSet = this.data.findBySongName(songName);
  }

  requestSong(songId: number){
    this.data.submitRequest(songId);
    this.activeRequests = this.data.activereqs();
  }
}
