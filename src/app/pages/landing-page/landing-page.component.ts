import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { parseXmlToJson, RssFeedApiService } from '../../service/rss-feed-api.service';

@Component({
  selector: 'ml-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LandingPageComponent implements OnInit {
  currentnews = 0;
  newslist = [];

  photos = [
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20246023_323680684750842_2129828290979272220_n.jpg?' +
      'oh=2fb30ad85d74e758d37efd8da44a7723&oe=5B110CB4',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20108361_320445475074363_8187853797667695862_n.jpg' +
      '?oh=bd4f51506bab659a171ba366dde8a30a&oe=5B1EAF0F',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20139663_320445295074381_8033589891415104251_n.jpg' +
      '?oh=216565a680d9c0a445fdb734ed5b5bb0&oe=5B16B89C',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/23172567_362709054181338_4869276777183638224_n.jpg' +
      '?oh=fce175707002b07d51fcc1ce3a25fddd&oe=5B154444',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/21743309_344424946009749_5473424926914253016_n.jpg' +
      '?oh=8ba658c3ca0eb02e79a72eef410b7070&oe=5B190F5F',
    'https://scontent.fiev5-1.fna.fbcdn.net/v/t1.0-9/20620879_329158964203014_3420407433726412152_n.jpg' +
      '?oh=269725a5d00c12d78f06c6ffe36484af&oe=5B2224C3'
  ];

  constructor(private cd: ChangeDetectorRef, private feedApi: RssFeedApiService) {}

  ngOnInit() {
    this.getNews();
  }

  getNews() {
    this.feedApi
      .getFeeds('https://www.rbc.ua/static/rss/newsline.img.ukr.rss.xml')
      .finally(() => this.cd.detectChanges())
      .subscribe(rs => (this.newslist = parseXmlToJson(rs).splice(0, 5)), err => console.log('error', err));
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
