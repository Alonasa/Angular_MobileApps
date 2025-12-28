import {Component} from '@angular/core';
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

@Component({
  selector: 'app-settings',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, RouterLink, IonBackButton, IonButtons, IonContent, IonRadioGroup, IonRadio, ReactiveFormsModule, FormsModule],
})

export class SettingsPage {
  unit: string = 'Metric' ;
  constructor() {
  }


  onUnitChange(event: RadioGroupCustomEvent<RadioGroupChangeEventDetail>){
    this.unit = event.target.value;
  }
}
