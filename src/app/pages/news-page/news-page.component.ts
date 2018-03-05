import { Component, OnInit } from '@angular/core';
import { Feed, parseXmlToJson, RssFeedApiService } from '../../service/rss-feed-api.service';

@Component({
  selector: 'ml-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss']
})
export class NewsPageComponent implements OnInit {
  news: Feed[];
  constructor(private feed: RssFeedApiService) {}

  ngOnInit() {
    const feedUrl2 = 'https://www.rbc.ua/static/rss/newsline.img.ukr.rss.xml';

    this.feed.getFeeds(feedUrl2).subscribe(
      rs => {
        this.news = parseXmlToJson(rs);
      },
      err => console.log('error', err)
    );
  }
}
