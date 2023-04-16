import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ITarget} from "../../../shared/interfaces";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private targetList = new BehaviorSubject<ITarget[]>([])

  constructor() {
  }

  public get getTargetList(): Observable<ITarget[]> {
    return this.targetList.asObservable();
  }

  public setTargetList(targetList: ITarget[]): void {
    this.targetList.next(targetList);
  }
}
