import { Component, OnInit } from '@angular/core';
import {StorageService} from "./core/services/storage.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private storageService: StorageService,
  ) {}

  async ngOnInit(): Promise<void> {

    await this.storageService.init();
    const userId = await this.storageService.getUserId();
    // if (!userId) {
    //   this.router.navigateByUrl('/login');
    // } else {
    //   this.router.navigateByUrl('/main');
    // }
  }


}
