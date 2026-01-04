import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {firstValueFrom} from "rxjs";
import {ActivatedRoute, RouterModule} from "@angular/router";
import {ApiRecipe} from "../interfaces/recipe.interface";
import {
  fitnessOutline,
  heart,
  heartOutline,
  leafOutline,
  peopleOutline,
  restaurantOutline,
  timeOutline,
  waterOutline,
} from 'ionicons/icons';
import {addIcons} from "ionicons";
import {SpoonacularService} from "../services/spoonacular/spoonacular.service";
import {StorageService} from "../services/storage/storage.service";
import {RecipesByIngredients} from "../interfaces/searchByIngredients.interface";
import {IonicModule} from "@ionic/angular";


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule
  ]
})


export class RecipePage implements OnInit {
  recipe: ApiRecipe | undefined;
  isFavorite: boolean = false;
  selectedUnit: string = "";
  isLoading:boolean = true;

  constructor(private route: ActivatedRoute, private spoonacular: SpoonacularService, private mds: StorageService) {
    addIcons({
      timeOutline,
      peopleOutline,
      leafOutline,
      waterOutline,
      fitnessOutline,
      restaurantOutline,
      heart,
      heartOutline
    });
  }


  getDietIcon(diet: string): string {
    const d = diet.toLowerCase();
    if (d.includes('vegan') || d.includes('vegetarian')) return 'leaf-outline';
    if (d.includes('dairy free')) return 'water-outline';
    if (d.includes('gluten free')) return 'fitness-outline';
    // fallback icon
    return 'restaurant-outline';
  }

  async toggleFavorite(isFavorite: boolean){
    const value = await this.mds.get("favorites");
    let favorites: RecipesByIngredients[] = value ? JSON.parse(value as string) : [];

    if (this.isFavorite) {
      favorites = favorites.filter((f: RecipesByIngredients) => f.id !== this.recipe?.id);
    } else {
      if (this.recipe) {
        favorites.push({
          id: this.recipe.id,
          title: this.recipe.title,
          image: this.recipe.image,
          imageType: this.recipe.imageType
        });
      }
    }

    await this.mds.set("favorites", JSON.stringify(favorites));
    this.isFavorite = !isFavorite;
  }


  async setFavoriteStatus(id: string | null){
    const favValue = await this.mds.get("favorites");
    const favorites: RecipesByIngredients[] = favValue ? JSON.parse(favValue as string) : [];
    this.isFavorite = favorites.some((f: any) => f.id === Number(id));
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.selectedUnit =  await this.mds.get("unit");
    await this.setFavoriteStatus(id);

    if (id) {
      this.isLoading = true;
      try {
        this.recipe = await firstValueFrom(this.spoonacular.getRecipeById(Number(id)));
      } catch (e) {
        console.error('Error fetching recipe details', e);
      }
      finally {
        this.isLoading = false;
      }
    }
  }
}
