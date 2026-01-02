import {Component} from '@angular/core';
import {
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink, RouterModule} from '@angular/router';
import {addIcons} from "ionicons";
import {heart, heartOutline, settingsOutline, trashOutline} from 'ionicons/icons';
import {SpoonacularService} from "../spoonacular";
import {firstValueFrom} from "rxjs";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {FormsModule} from "@angular/forms";
import {ApiByIngredients} from "../interfaces/searchByIngredients.interface";


/*Importing icons. Standalone ionic application didn't give automatic loading of the
 icons(purpose is the bundle size), because of that we must import them separately.
 only for the necessary icons
 */

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonButtons, IonButton, IonIcon, RouterModule, RouterLink, RecipeCardComponent, FormsModule, IonGrid, IonRow, IonCol],
})

export class HomePage {
  recipes: ApiByIngredients = {results: [], offset: 0, number: 0, totalResults: 0};
  ingredientsString: string = '';
  isSearched: boolean = false;
  private ingredients: string[] = [];

  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private spoonacular: SpoonacularService) {
    addIcons({
      heart,
      heartOutline,
      settingsOutline,
      trashOutline
    });
  }

  async getRecipesData() {
    this.buildArrayIngredients()
    try {
      const res = await firstValueFrom(this.spoonacular.getRecipesWithIngredients(this.ingredients));
      this.recipes = res;
      this.isSearched = true;
      console.log(res);
    } catch (e) {
      console.error("Error");
    }
  }

  clearSearchField(){
    this.ingredientsString = '';
  }

  buildArrayIngredients(){
    this.ingredients = this.ingredientsString.split(',');
  }
}
