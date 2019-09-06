import { Injectable, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeRulesService {

  constructor() { }

go(){
  const timeLORD = Observable.create (observer => {
    setInterval(()=>{
      observer.
    }
      
    )
  })
}

}