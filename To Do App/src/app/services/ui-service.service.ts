import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UiServiceService {
  private subject = new Subject<any>();
  show: boolean = false;
  constructor() {}
  toggleBtn(): void {
    this.show = !this.show;
    this.subject.next(this.show);
  }
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
