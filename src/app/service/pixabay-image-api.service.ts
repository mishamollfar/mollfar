import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface RequestParams {
  q?: string;
  image_type?: 'all' | 'photo' | 'illustration' | 'vector';
  orientation?: 'all' | 'horizontal' | 'vertical';
  category?:
    | 'fashion'
    | 'nature'
    | 'backgrounds'
    | 'science'
    | 'education'
    | 'people'
    | 'feelings'
    | 'religion'
    | 'health'
    | 'places'
    | 'animals'
    | 'industry'
    | 'food'
    | 'computer'
    | 'sports'
    | 'transportation'
    | 'travel'
    | 'buildings'
    | 'business'
    | 'music';
  min_width?: number;
  min_height?: number;
  order?: 'popular' | 'latest';
  page?: number;
  per_page?: number;
}

export interface ImageGalery {
  hits: Image[];
  total: number;
  totalHits: number;
}
export interface Image {
  comments: number;
  downloads: number;
  favorites: number;
  id: number;
  imageHeight: number;
  imageSize: number;
  imageWidth: number;
  largeImageURL: string;
  likes: number;
  pageURL: string;
  previewHeight: number;
  previewURL: string;
  previewWidth: number;
  tags: string;
  type: string;
  user: string;
  userImageURL: string;
  user_id: number;
  views: number;
  webformatHeight: number;
  webformatURL: string;
  webformatWidth: number;
}

@Injectable()
export class PixabayImageApiService {
  API_KEY = '8386757-309469f404464a11f6721b9a7';
  URL = 'https://pixabay.com/api/?key=' + this.API_KEY;

  constructor() {}

  getImages(params?: RequestParams) {
    return this.request('GET', this.getParams(params)) as Observable<ImageGalery>;
  }

  getParams(params: Object) {
    const qs = [];
    if (!params) {
      return '';
    }

    Object.keys(params).forEach(k => qs.push(`${k}=${params[k]}`));

    return qs.join('&');
  }

  request(method, params): Observable<any> {
    const url = this.URL + params;
    return Observable.create(observer => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);

      xhr.send();

      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            observer.next(JSON.parse(xhr.response));
            observer.complete();
          } else {
            observer.error(xhr.response);
          }
        }
      };
    });
  }
}
