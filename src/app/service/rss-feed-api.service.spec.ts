import { TestBed, inject } from '@angular/core/testing';

import { RssFeedApiService } from './rss-feed-api.service';

describe('RssFeedApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RssFeedApiService]
    });
  });

  it('should be created', inject([RssFeedApiService], (service: RssFeedApiService) => {
    expect(service).toBeTruthy();
  }));
});
