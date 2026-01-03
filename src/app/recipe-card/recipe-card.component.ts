import {Component, Input} from '@angular/core';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle
} from "@ionic/angular/standalone";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, RouterLink]
})


export class RecipeCardComponent {
  @Input() id: number = 0;
  @Input() title: string = "No products";
  @Input() image: string=  "img.jpg";

  constructor() { }
}
