import { TestBed, inject } from '@angular/core/testing';

import { PopupDialogsService } from './popup-dialogs.service';

describe('PopupDialogsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupDialogsService]
    });
  });

  it(
    'should be created',
    inject([PopupDialogsService], (service: PopupDialogsService) => {
      expect(service).toBeTruthy();
    })
  );
});
