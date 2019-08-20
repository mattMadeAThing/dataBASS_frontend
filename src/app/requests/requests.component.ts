import { Component, OnInit } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { Observable } from 'rxjs';
import { Song } from '../Song';
import {DataService} from '../data.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  resultSet: Observable<Song[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
  }

  activeReqs(){
    this.resultSet = this.data.activereqs();
  }
}
