import { TestBed, inject } from '@angular/core/testing';

import { PixabayImageApiService } from './pixabay-image-api.service';

describe('PixabayImageApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PixabayImageApiService]
    });
  });

  it(
    'should be created',
    inject([PixabayImageApiService], (service: PixabayImageApiService) => {
      expect(service).toBeTruthy();
    })
  );
});
