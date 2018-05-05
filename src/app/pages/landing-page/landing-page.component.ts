import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { parseXmlToJson, RssFeedApiService } from '../../service/rss-feed-api.service';
import { PixabayImageApiService } from '../../service/pixabay-image-api.service';
import { finalize, map } from 'rxjs/internal/operators';

@Component({
  selector: 'ml-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  currentnews = 0;
  newslist = [];
  images;

  constructor(
    private cd: ChangeDetectorRef,
    private feedApi: RssFeedApiService,
    private pixApi: PixabayImageApiService
  ) {}

  ngOnInit() {
    this.getNews();
    this.getImages();
  }

  getNews() {
    this.feedApi
      .getFeeds('https://www.rbc.ua/static/rss/newsline.img.ukr.rss.xml')
      .pipe(finalize(() => this.cd.detectChanges()))
      .subscribe(rs => (this.newslist = parseXmlToJson(rs).splice(0, 5)), err => console.log('error', err));
  }

  getImages() {
    this.pixApi
      .getImages()
      .pipe(finalize(() => this.cd.detectChanges()), map(res => res.hits.splice(0, 10)))
      .subscribe(rs => (this.images = rs.map(item => item.previewURL)), err => console.log(err));
  }

  previewNews() {
    this.currentnews--;
    this.cd.detectChanges();
  }

  nextNews() {
    this.currentnews++;
    this.cd.detectChanges();
  }
}
