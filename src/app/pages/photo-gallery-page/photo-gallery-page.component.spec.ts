import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGalleryPageComponent } from './photo-gallery-page.component';

describe('PhotoGalleryPageComponent', () => {
  let component: PhotoGalleryPageComponent;
  let fixture: ComponentFixture<PhotoGalleryPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PhotoGalleryPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGalleryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
