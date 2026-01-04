import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { RecipeCardComponent } from '../recipe-card/recipe-card.component';
import { RecipesByIngredients } from '../interfaces/searchByIngredients.interface';
import { StorageService } from '../services/storage/storage.service';

import { addIcons } from 'ionicons';
import { heartDislikeOutline } from 'ionicons/icons';
import {AppHeaderComponent} from "../app-header/app-header.component";

@Component({
  selector: 'app-favorites',
  standalone: true,
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  imports: [IonicModule, CommonModule, FormsModule, RouterModule, RecipeCardComponent, AppHeaderComponent]
})
export class FavoritesPage implements OnInit {
  favoriteRecipes = this.mds.get('favorites');
  recipes: RecipesByIngredients[] = [];

  constructor(private mds: StorageService) {
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
