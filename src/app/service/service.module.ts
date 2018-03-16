import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RssFeedApiService } from './rss-feed-api.service';
import { PixabayImageApiService } from './pixabay-image-api.service';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  providers: [RssFeedApiService, PixabayImageApiService]
})
export class ServiceModule {}
