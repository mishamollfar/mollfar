import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImageGalery, PixabayImageApiService } from '../../service/pixabay-image-api.service';
import { finalize } from 'rxjs/internal/operators';

@Component({
  selector: 'ml-photo-gallery-page',
  templateUrl: './photo-gallery-page.component.html',
  styleUrls: ['./photo-gallery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryPageComponent implements OnInit {
  images: ImageGalery;

  constructor(private pixApi: PixabayImageApiService, private cd: ChangeDetectorRef) {}

  ngOnInit() {
    this.getImages();
  }

  getImages() {
    this.pixApi
      .getImages()
      .pipe(
        finalize(() => this.cd.detectChanges())
      )
      .subscribe(rs => (this.images = rs), err => console.log(err));
  }
}
