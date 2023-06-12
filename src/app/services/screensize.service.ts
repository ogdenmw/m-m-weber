import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
// import { BehaviorSubject, Observable, distinctUntilChanged } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreensizeService {

  private isDesktop = new BehaviorSubject(false);

  constructor() { }

  onResize(size: any) {
    if (size < 568) {
        this.isDesktop.next(false);
    } else {
        this.isDesktop.next(true);
    }
  }

  isDesktopView(): Observable<boolean> {
    return this.isDesktop.asObservable().pipe(distinctUntilChanged());
  }
}
