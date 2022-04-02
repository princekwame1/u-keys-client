import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  navIsClosed = new BehaviorSubject<boolean>(false)

  constructor() { }
}
