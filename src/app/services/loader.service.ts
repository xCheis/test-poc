import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  public loader : BehaviorSubject<boolean>;
  

  constructor() { 
    this.loader = new BehaviorSubject(false);
  }

  hideLoader () {
    this.loader.next(false);
  }

  showLoader() {
    this.loader.next(true);
  }

}
