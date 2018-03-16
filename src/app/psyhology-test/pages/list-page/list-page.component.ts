import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPageComponent implements OnInit {
  tests = [
    { name: 'тест на визначення бізнес-жилки', routerlink: '/tests/business' },
    { name: 'тест на визначення організаторських здібностей', routerlink: '/tests/organizational' },
    { name: 'тест на визначення рівня котактоності', routerlink: '/tests/contact-level' },
    { name: 'тест на визначення рівня тривожності', routerlink: '/tests/anxiety-level' },
    { name: 'тест на визначення самооцінки', routerlink: '/tests/self-esteem' }
  ];

  constructor() {}

  ngOnInit() {}
}
