import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Feed {
  title: string;
  category: string;
  url: string;
  description: string;
  date: string;
  image: string;
}

@Injectable()
export class RssFeedApiService {
  constructor() {}

  getFeeds(feedUrl) {
    return this.request('GET', feedUrl);
  }

  request(method, url): Observable<any> {
    return Observable.from(
      new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);

        xhr.send();

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              resolve(xhr.responseXML);
            } else {
              reject(xhr.response);
            }
          }
        };
      })
    );
  }
}

export function parseXmlToJson(xmlData) {
  const obj = [];
  const feed = xmlData.querySelectorAll('item');
  feed.forEach((key: HTMLElement) => {
    obj.push({
      title: key.querySelector('title') ? key.querySelector('title').innerHTML : '',
      category: key.querySelector('category')
        ? key.querySelector('category').innerHTML.replace(/(\<|\!|\[|\w+|\]\]\>)+/g, '')
        : '',
      url: key.querySelector('link') ? key.querySelector('link').innerHTML : '',
      description: key.querySelector('description') ? key.querySelector('description').innerHTML : '',
      date: key.querySelector('pubDate') ? key.querySelector('pubDate').innerHTML : '',
      image: key.querySelector('enclosure') ? key.querySelector('enclosure').getAttribute('url') : ''
    });
  });

  return obj;
}
