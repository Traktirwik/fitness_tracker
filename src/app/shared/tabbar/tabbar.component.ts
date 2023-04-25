import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabbar',
  templateUrl: './tabbar.component.html',
  styleUrls: ['./tabbar.component.scss'],
})
export class TabbarComponent implements OnInit {
  public tabs = [
    { id: 'noinventory', title: 'Без инвентаря' },
    { id: 'inventory', title: 'Инвентарь' },
  ];
  public selectedTabId = this.tabs[0].id;

  constructor() {}
  public selectTab(id: string) {
    this.selectedTabId = id;
  }
  ngOnInit() {}
}
