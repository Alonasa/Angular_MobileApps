import {inject, Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../environments/environment";

export interface ApiResult {
  results: any[]
}

@Injectable({
  providedIn: 'root',
})

//made by example from https://ionicacademy.com/ionic-6-app-api-calls/
export class SpoonacularService {
  private http = inject(HttpClient);

  constructor() {}
  private baseUrl = environment.spoonacularBaseUrl;
  private apiKey = environment.spoonacularApiKey;

  getRecipesWithIngredients(ingredients: string[]): Observable<ApiResult>{
    const params = new HttpParams()
      .set('apiKey', this.apiKey)
      .set('ingredients', ingredients.join(','))

    return this.http.get<ApiResult>(
      `${this.baseUrl}`, {responseType:'json', params},
    );
  }

}
