import {Component} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink, RouterModule} from '@angular/router';

/*Importing icons. Standalone ionic application didn't give automatic loading of the
 icons(purpose is the bundle size), because of that we must import them separately.
 only for the necessary icons
 */
import {addIcons} from "ionicons";
import {heart, heartOutline, settingsOutline} from 'ionicons/icons';
import {SpoonacularService} from "../spoonacular";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButtons, IonButton, IonIcon, RouterModule, RouterLink],
})

export class HomePage {
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private spoonacular: SpoonacularService) {
    addIcons({
      heart,
      heartOutline,
      settingsOutline
    });
  }

  async getRecipesData(){
    const ingredients = ['carrot', 'onion'];
    try{
     const recipes = await firstValueFrom(this.spoonacular.getRecipesWithIngredients(ingredients));
            console.log(recipes)
    } catch (e) {
      console.error("Error")
    }

  }
}
