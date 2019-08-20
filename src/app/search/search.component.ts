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
  song: Song;
  ngOnInit() {

  }

  searchByArtist(searchTerm){

    this.resultSet = this.data.findByArtist(searchTerm);

    console.log(this.song + "In Serachcompts");
  }

  requestSong(songId: number){

  }
}
