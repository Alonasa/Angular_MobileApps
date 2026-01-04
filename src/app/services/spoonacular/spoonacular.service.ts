import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {ApiByIngredients} from "../../interfaces/searchByIngredients.interface";
import {ApiRecipe} from "../../interfaces/recipe.interface";

@Injectable({
  providedIn: 'root',
})

//made by example from https://ionicacademy.com/ionic-6-app-api-calls/
export class SpoonacularService {
  constructor(private http: HttpClient) {
  }

  private baseUrl = environment.spoonacularBaseUrl;
  private apiKey = environment.spoonacularApiKey;

  setBaseParams() {
    return new HttpParams().set('apiKey', this.apiKey);
  }

  getRecipesWithIngredients(ingredients: string[], number: number, offset: number): Observable<ApiByIngredients> {
    const params = this.setBaseParams()
                       .set('includeIngredients', ingredients.join(','))
                       .set('number', number.toString())
                       .set('offset', offset.toString());

    return this.http.get<ApiByIngredients>(`${this.baseUrl}/complexSearch`, {
      responseType: 'json',
      params
    },);
  }

  //get recipe apirequest https://spoonacular.com/food-api/docs#Get-Recipe-Information
  getRecipeById(id: number): Observable<ApiRecipe> {
    const params = this.setBaseParams();

    return this.http.get<ApiRecipe>(`${this.baseUrl}/${id}/information`, {
      responseType: 'json',
      params
    },);
  }

}
