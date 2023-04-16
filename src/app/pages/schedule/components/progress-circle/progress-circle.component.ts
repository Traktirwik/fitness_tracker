import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-circle',
  templateUrl: './progress-circle.component.html',
  styleUrls: ['./progress-circle.component.scss'],
})
export class ProgressCircleComponent  implements OnInit {
  @Input() progress: number = 0;
  @Input() target: number = 0;
  public PI = Math.PI;

  constructor() { }

  ngOnInit() {}

}
