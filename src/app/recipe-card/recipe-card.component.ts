import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/angular/standalone';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  templateUrl: 'recipe-card.component.html',
  styleUrls: ['recipe-card.component.scss'],
  imports: [RouterLink, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonButton],
})


export class RecipeCardComponent {
  @Input() id: number = 0;
  @Input() title: string = "No title";
  @Input() image: string=  "img.jpg";

  constructor() {}
}
