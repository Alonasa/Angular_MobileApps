import {Component, OnInit} from '@angular/core';
import {IonicModule} from "@ionic/angular";
import {heart, settingsOutline} from "ionicons/icons";
import {RouterLink, RouterModule} from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-setting-icons',
  templateUrl: './setting-icons.component.html',
  styleUrls: ['./setting-icons.component.scss'],
  imports: [IonicModule, RouterLink, RouterModule]
})
export class SettingIconsComponent {
  constructor() {
  }

  protected readonly settingsOutline = settingsOutline;
  protected readonly heart = heart;
}
