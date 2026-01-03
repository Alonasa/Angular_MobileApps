import {Component, inject, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular/standalone';
import {RouterLink} from "@angular/router";
import {RecipeCardComponent} from "../recipe-card/recipe-card.component";
import {RecipesByIngredients} from "../interfaces/searchByIngredients.interface";
import {StorageService} from "../services/storage/storage.service";
import {addIcons} from "ionicons";
import {heartDislikeOutline} from "ionicons/icons";

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButtons, IonBackButton, RouterLink, IonCol, IonGrid, IonRow, RecipeCardComponent, IonButton, IonIcon]
})
export class FavoritesPage implements OnInit {
  private mds = inject(StorageService);
  favoriteRecipes = this.mds.get("favorites");
  recipes: RecipesByIngredients[] = [];


  constructor() {
    addIcons({
      heartDislikeOutline
    });
  }

  async removeFromFavorites(id: number) {
    let fav = this.recipes.filter(r=> r.id !== id);
    await this.mds.set("favorites", JSON.stringify(fav));
    this.recipes = fav;
  }

  async ngOnInit() {
    this.recipes = await this.favoriteRecipes ? JSON.parse(await this.favoriteRecipes as string) : [];
  }
}
