import {Component, OnInit} from '@angular/core';
import {ITarget} from "../../../../shared/interfaces";
import {ScheduleService} from "../../services/schedule.service";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
})
export class ScheduleComponent implements OnInit {

  public date: string = '';
  public type: string = 'string';
  public targetList: ITarget[] = [];

  constructor(
    private scheduleService: ScheduleService
  ) {
  }

  ngOnInit() {
    this.scheduleService.getTargetList.subscribe({
      next: (targetList: ITarget[]) => {
        this.targetList = targetList;
      }
    })

    const targetMock: ITarget[] = [{
      title: ' 100 отжиманий',
      description: 'если не сделаешь -- лох',
      tillDate: Date.now(),
      target: 100,
      progress: 25
    }];
    this.scheduleService.setTargetList(targetMock);
  }

  public onChange($event: any) {
    console.log($event);
  }

  public getDate(timestamp: number): string {
    const date = new Date(timestamp);
    return `${date.getDate().toString().padStart(2, '0')}.${date.getMonth().toString().padStart(2, '0')}.${date.getFullYear()}`
  }
}
