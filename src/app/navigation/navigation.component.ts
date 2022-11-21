import { Component, OnInit } from '@angular/core';
import { ConfigService, IMenuItem } from '../service/config.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  appName: string = this.config.appName;
  menuItems: IMenuItem[] = this.config.menuItems;

  navigateTo: string = '';
  route: string = '';

  constructor(private config: ConfigService) {}

  ngOnInit(): void {}

  ngDoCheck(): void {
    if (window.location.href.includes('list')) {
      this.navigateTo = 'Go to Home';
      this.route = '';
    } else {
      this.navigateTo = 'Go to List';
      this.route = '/list';
    }
  }
}
