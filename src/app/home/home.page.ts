import {Component} from '@angular/core';

import {RouterLink, RouterModule} from '@angular/router';
import {addIcons} from "ionicons";
import {heart, heartOutline, settingsOutline, trashOutline} from 'ionicons/icons';
import {firstValueFrom} from "rxjs";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {FormsModule} from "@angular/forms";
import {
  ApiByIngredients, RecipesByIngredients
} from "../interfaces/searchByIngredients.interface";
import {InfiniteScrollCustomEvent, IonicModule, LoadingController} from "@ionic/angular";
import {SpoonacularService} from "../services/spoonacular/spoonacular.service";
import {CommonModule} from "@angular/common";

/*Importing icons. Standalone ionic application didn't give automatic loading of the
 icons(purpose is the bundle size), because of that we must import them separately.
 only for the necessary icons
 */

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonicModule, CommonModule, RouterModule, RouterLink, RecipeCardComponent, FormsModule],
})

export class HomePage {
  recipes: ApiByIngredients = {
    results: [],
    offset: 0,
    number: 0,
    totalResults: 0
  };
  ingredientsString: string = '';
  isSearched: boolean = false;
  private ingredients: string[] = [];
  offset: number = 0;
  number: number = 10;
  hasMore: boolean = false;
  recipesList: RecipesByIngredients[] = [];

  constructor(private spoonacular: SpoonacularService, private loadingCtrl: LoadingController) {
    addIcons({
      heart,
      heartOutline,
      settingsOutline,
      trashOutline
    });
  }

  async getRecipesData() {
    if (this.searchComparator() && this.isSearched) {
      return;
    }

    this.recipesList = [];
    this.offset = 0;
    this.buildArrayIngredients();

    try {
      const res = await firstValueFrom(this.spoonacular.getRecipesWithIngredients(this.ingredients, this.number, this.offset));

      const loading = await this.loadingCtrl.create({
        message: 'Loading...',
        spinner: 'bubbles',
      });

      await loading.present()

      if (res) {
        this.recipesList.push(...res.results);
        this.recipes = res;
        this.isSearched = true;
        this.number = res.number;
        this.hasMore = res.totalResults > this.recipesList.length;
        await loading.dismiss();
        console.log(this.recipesList);
      }
    } catch (e) {
      console.error("Error");
    }
  }

  clearSearchField() {
    this.ingredientsString = '';
  }

  buildArrayIngredients() {
    this.ingredients = this.ingredientsString.split(',');
  }

  //Helper for optimisation spoonacular api requests
  searchComparator(): boolean {
    const newIngredients = this.ingredientsString.split(',').map(i => i.trim());

    // Compare current ingredients with the new input
    return this.ingredients.length === newIngredients.length &&
      this.ingredients.every((val, index) => val === newIngredients[index]);

  }

  //loader made by analogy https://www.youtube.com/watch?v=y_vwf15eAD
  async loadMore(event: InfiniteScrollCustomEvent) {
    this.offset += this.number;

    if (!this.hasMore) {
      event.detail.complete();
      return;
    }

    this.spoonacular
        .getRecipesWithIngredients(this.ingredients, this.number, this.offset)
        .subscribe({
          next: (res) => {
            this.recipesList.push(...res.results);
            this.hasMore = (
              this.offset + this.number
            ) < res.totalResults;
            event.target.complete();
          },
          error: () => {
            event.target.complete();
          }
        });
  }
}
