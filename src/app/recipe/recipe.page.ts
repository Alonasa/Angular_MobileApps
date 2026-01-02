import {Component, inject, OnInit} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {firstValueFrom} from "rxjs";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {SpoonacularService} from "../spoonacular";
import {ApiRecipe} from "../interfaces/recipe.interface";
import {
  fitnessOutline,
  leafOutline,
  peopleOutline,
  restaurantOutline,
  timeOutline,
  waterOutline,
} from 'ionicons/icons';
import {addIcons} from "ionicons";


@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonBackButton, IonButtons, RouterLink, IonGrid, IonRow, IonCol, NgOptimizedImage, IonChip, IonIcon, IonLabel]
})


export class RecipePage implements OnInit {
  private route = inject(ActivatedRoute);
  private spoonacular = inject(SpoonacularService);
  recipe: ApiRecipe | undefined;

  constructor() {
    addIcons({
      timeOutline,
      peopleOutline,
      leafOutline,
      waterOutline,
      fitnessOutline,
      restaurantOutline
    });
  }

  async ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      try {
        this.recipe = await firstValueFrom(this.spoonacular.getRecipeById(Number(id)));
        console.log('Recipe Details:', this.recipe);
      } catch (e) {
        console.error('Error fetching recipe details', e);
      }
    }
  }

  getDietIcon(diet: string): string {
    const d = diet.toLowerCase();
    if (d.includes('vegan') || d.includes('vegetarian')) return 'leaf-outline';
    if (d.includes('dairy free')) return 'water-outline';
    if (d.includes('gluten free')) return 'fitness-outline';
    // fallback icon
    return 'restaurant-outline';
  }
}
