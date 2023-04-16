import {Component, OnInit} from '@angular/core';
import {BottomNavigationService} from "../../core/services/bottom-navigation.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  public selectedItem: number = 0;

  constructor(
    private bottomNavigation: BottomNavigationService,
  ) {
  }

  ngOnInit() {
    this.bottomNavigation.getSelectedMenuItem.subscribe({
      next: (data: number) => {
        this.selectedItem = data;
      }
    })
  }

  public changeSelectedItem(selectedItem: number) {
    this.bottomNavigation.setSelectedMenuItem(selectedItem);
  }

}
