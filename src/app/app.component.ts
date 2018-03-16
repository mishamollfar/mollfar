import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'ml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  isHome;

  constructor(private router: Router) {
    router.events.filter(event => event instanceof NavigationEnd).subscribe(rs => (this.isHome = rs['url']));
  }

  get homePage() {
    return this.isHome === '/';
  }

  ngOnInit() {}
}
