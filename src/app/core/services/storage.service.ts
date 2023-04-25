import {Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private appStorage: Storage | null = null;

  constructor(
    private storage: Storage
  ) {
  }

  async init(): Promise<void> {
    this.appStorage = await this.storage.create();
  }

  async setUserId(userId: string) {
    await this.storage.set('userId', userId);
  }

  async getUserId(): Promise<string | null> {
    return this.storage.get('userId');
  }
}
