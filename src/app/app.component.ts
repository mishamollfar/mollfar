import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter, takeUntil } from 'rxjs/internal/operators';
import { Subject } from 'rxjs/index';

@Component({
  selector: 'ml-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  isHome;
  destroy = new Subject();

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this.destroy)
    ).subscribe(rs => (this.isHome = rs['url']));
  }

  get homePage() {
    return this.isHome === '/';
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.destroy.next();
  }
}
