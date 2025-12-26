import { Component } from '@angular/core';
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

/*Importing icons. Standalone ionic application didn't give automatic loading of the
 icons(purpose is the bundle size), because of that we must import them separately
 */
import {addIcons} from "ionicons";
import { heart, heartOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButtons, IonButton, IonIcon],
})
export class HomePage {
  public isFavorite:boolean = false;
  constructor() {
    addIcons({heart, heartOutline, settingsOutline});
  }

  toggleFavorite() {
      this.isFavorite = !this.isFavorite;
  }

  openSettings(){
    console.log("Settings")
  }
}
