import {inject, Injectable} from '@angular/core';
import {Storage} from "@ionic/storage-angular";

type storageType = string | number | boolean;

@Injectable({
  providedIn: 'root',
})

export class StorageService {
  private storage = inject(Storage);

  constructor() {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async set(key: string, value: storageType) {
    await this.storage.set(key, value);
  }

  async get(key: string) {
    return await this.storage.get(key);
  }
}
