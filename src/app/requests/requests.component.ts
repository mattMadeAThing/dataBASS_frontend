import { Component, OnInit, Input } from '@angular/core';
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
  // The activeRequests are passed to the RequestsComponent through this right here
  @Input() activeRequests: Observable<Song[]>;
  resultSet: Observable<Song[]>;

  constructor(private data: DataService) { }

  ngOnInit() {
  }
  // This may need to be nuked. Double check access logic in template
  activeReqs() {
    this.resultSet = this.data.activereqs();
  }

}
