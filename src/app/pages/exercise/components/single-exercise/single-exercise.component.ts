import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-single-exercise',
  templateUrl: './single-exercise.component.html',
  styleUrls: ['./single-exercise.component.scss'],
})
export class SingleExerciseComponent implements OnInit {
  private id: string | null = null;
  public title = '';
  public exerciseList: any[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    console.log('HEREHERE IN COMPONENTs');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    const { title, list } = this.getExercisesInfo(this.id!);
    this.title = title;
    this.exerciseList = list;
  }

  private getExercisesInfo(id: string) {
    return {
      title: `Упражнения для ${id}`,
      list: [
        { id: uuidv4(), title: 'Отжимания', inventory: null },
        {
          id: uuidv4(),
          title: 'Разведение гантелей через стороны',
          inventory: null,
        },
        { id: uuidv4(), title: 'Отжимания на трицепс', inventory: null },
        {
          id: uuidv4(),
          title: 'Выпрямление рук из планки на локтях',
          inventory: null,
        },
        { id: uuidv4(), title: 'Сгибание рук лежа на полу', inventory: null },
        {
          id: uuidv4(),
          title: 'Перекрестные касания плеч⠀ в планке',
          inventory: null,
        },
        { id: uuidv4(), title: 'Отжимания от скамьи', inventory: null },
        {
          id: uuidv4(),
          title: 'Разведение гантелей через стороны',
          inventory: 'dumbbells',
        },
        {
          id: uuidv4(),
          title: 'Разгибание рук из-за головы',
          inventory: 'dumbbells',
        },
        { id: uuidv4(), title: 'Жим гантелей стоя', inventory: 'dumbbells' },
        {
          id: uuidv4(),
          title: 'Подъем на бицепс с супинацией',
          inventory: 'dumbbells',
        },
        {
          id: uuidv4(),
          title: 'Горизонтальное разведение',
          inventory: 'dumbbells',
        },
        {
          id: uuidv4(),
          title: 'Тяга гантелей к подбородку',
          inventory: 'dumbbells',
        },
        {
          id: uuidv4(),
          title: 'Подъем рук перед собой с гантелями',
          inventory: 'dumbbells',
        },
      ],
    };
  }
}
