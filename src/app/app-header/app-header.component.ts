import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SettingIconsComponent } from '../setting-icons/setting-icons.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IonicModule, CommonModule, RouterModule, SettingIconsComponent],
  templateUrl: 'app-header.component.html',
  styleUrls: ['app-header.component.scss']
})

export class AppHeaderComponent {
  @Input() title: string = 'G00473376';
  @Input() showBackButton: boolean = false;
  @Input() defaultHref: string = '/home';
}
