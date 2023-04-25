import { Component, OnInit } from '@angular/core';
import { BottomNavigationService } from '../../../../core/services/bottom-navigation.service';

@Component({
  selector: 'main-layout-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public title: string = 'ГРАФИК ЗАНЯТИЙ';

  constructor(private bottomNavigation: BottomNavigationService) {}

  ngOnInit() {
    this.bottomNavigation.getSelectedMenuItem.subscribe({
      next: (data) => {
        console.log('HEREHERE', data)
        switch (data) {
          case 0:
            this.title = 'ГРАФИК ЗАНЯТИЙ';
            break;
          case 1:
            this.title = 'ВИДЫ ТРЕНИРОВОК';
            break;
          case 2:
            this.title = 'ТВОЙ ПРОГРЕСС';
            break;
          case 3:
            this.title = 'ПРОФИЛЬ';
            break;
        }
      },
    });
  }
}
