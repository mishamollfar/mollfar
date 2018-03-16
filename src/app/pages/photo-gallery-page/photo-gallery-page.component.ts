import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ml-photo-gallery-page',
  templateUrl: './photo-gallery-page.component.html',
  styleUrls: ['./photo-gallery-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGalleryPageComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
