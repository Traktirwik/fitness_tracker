import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-exercise',
  templateUrl: './single-exercise.component.html',
  styleUrls: ['./single-exercise.component.scss'],
})
export class SingleExerciseComponent implements OnInit {
  private id: string | null = null;
  public title = '';
  public exerciseList = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('HEREHERE IN COMPONENTs')
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.title = this.id!;
  }
}
