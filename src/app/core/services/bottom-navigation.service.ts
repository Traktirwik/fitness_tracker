import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BottomNavigationService {

  private selectedMenuItem = new BehaviorSubject(0);

  constructor() {
  }

  public get getSelectedMenuItem(): Observable<number> {
    return this.selectedMenuItem;
  }

  public setSelectedMenuItem(item: number): void {
    this.selectedMenuItem.next(item);
  }
}
