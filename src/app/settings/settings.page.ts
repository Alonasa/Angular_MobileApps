import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/angular/standalone';

import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, RouterLink],
})

export class SettingsPage {
  constructor() {
  }
}
