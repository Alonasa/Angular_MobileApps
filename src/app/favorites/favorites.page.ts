import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {SettingsPage} from "../settings/settings.page";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLink, SettingsPage]
})
export class FavoritesPage {

  constructor() {
  }

  // ngOnInit() {
  //
  // }

}
