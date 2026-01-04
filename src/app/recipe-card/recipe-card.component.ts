import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {IonicModule} from "@ionic/angular";

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss'],
  imports: [IonicModule, RouterLink]
})


export class RecipeCardComponent {
  @Input() id: number = 0;
  @Input() title: string = "No products";
  @Input() image: string=  "img.jpg";

  constructor() { }
}
