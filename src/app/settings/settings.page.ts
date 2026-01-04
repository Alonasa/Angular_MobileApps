import {Component, OnInit} from '@angular/core';
import {
  IonicModule, RadioGroupChangeEventDetail, RadioGroupCustomEvent,
} from '@ionic/angular';

import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageService} from "../services/storage/storage.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ]
})

export class SettingsPage implements OnInit {
  unit: string = 'metric';

  constructor(private mds: StorageService) {

  }

  async onUnitChange(event: RadioGroupCustomEvent<RadioGroupChangeEventDetail>) {
    this.unit = event.target.value;
    await this.mds.set("unit", this.unit);
  }

  async ngOnInit() {
    const savedUnit= await this.mds.get("unit");
    if (savedUnit) {
      this.unit = savedUnit;
    }else {
      await this.mds.set("unit", this.unit);
    }
  }

  async ionViewWillEnter() {
    const val = await this.mds.get("unit");
    if (val) {
      this.unit = val;
    }
  }
}
