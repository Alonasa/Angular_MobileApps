import {Component, inject, OnInit} from '@angular/core';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonRadio,
  IonRadioGroup,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';

import {RouterLink} from "@angular/router";
import {RadioGroupChangeEventDetail, RadioGroupCustomEvent} from "@ionic/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StorageService} from "../services/storage/storage.service";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, RouterLink, IonBackButton, IonButtons, IonContent, IonRadioGroup, IonRadio, ReactiveFormsModule, FormsModule],
})

export class SettingsPage implements OnInit {
  private mds = inject(StorageService);
  unit: string = 'metric';

  constructor() {

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
