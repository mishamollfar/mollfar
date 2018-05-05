import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Feed, parseXmlToJson, RssFeedApiService } from '../../service/rss-feed-api.service';
import { MatTabChangeEvent } from '@angular/material';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'ml-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NewsPageComponent implements OnInit {
  indexTab = 0;
  news: Feed[];
  feed = {
    0: 'https://www.rbc.ua/static/rss/newsline.img.ukr.rss.xml',
    1: 'https://codeguida.com/feeds/',
    2: 'https://habrahabr.ru/rss/interesting/',
    3: 'https://tokar.ua/feed',
    4: 'https://blog.angular.io/feed',
    5: 'https://stackoverflow.com/feeds',
    6: 'http://k.img.com.ua/rss/ua/technews.xml',
    7: 'https://espreso.tv/rss'
  };

  constructor(private feedApi: RssFeedApiService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.changeTab();
  }

  changeTab(event?: MatTabChangeEvent) {
    delete this.news;
    this.indexTab = event ? event.index : this.indexTab;
    this.feedApi
      .getFeeds(this.feed[this.indexTab])
      .pipe(
        finalize(() => this.cd.detectChanges())
      )
      .subscribe(rs => (this.news = parseXmlToJson(rs)), err => console.log('error', err));
  }
}
