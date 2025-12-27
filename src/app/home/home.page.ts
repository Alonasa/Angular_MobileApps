import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonButtons,
  IonButton,
  IonIcon
} from '@ionic/angular/standalone';
import {RouterLink, RouterModule} from '@angular/router';

/*Importing icons. Standalone ionic application didn't give automatic loading of the
 icons(purpose is the bundle size), because of that we must import them separately.
 only for the necessary icons
 */
import {addIcons} from "ionicons";
import { heart, heartOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButtons, IonButton, IonIcon, RouterModule, RouterLink],
})

export class HomePage {
  constructor() {
    addIcons({heart, heartOutline, settingsOutline});
  }
}
