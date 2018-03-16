import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ImageGalery, PixabayImageApiService } from '../../service/pixabay-image-api.service';

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
      .finally(() => this.cd.detectChanges())
      .subscribe(
        rs => {
          this.images = rs;
          console.log(this.images);
        },
        err => console.log(err)
      );
  }
}
