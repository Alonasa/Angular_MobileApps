import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'settings',
    loadComponent: () => import('./settings/settings.page').then((m) => m.SettingsPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  {
    path: 'favorites',
    loadComponent: () => import('./favorites/favorites.page').then( m => m.FavoritesPage)
  },
  {
    path: 'recipe',
    loadComponent: () => import('./recipe/recipe.page').then( m => m.RecipePage)
  },

];
