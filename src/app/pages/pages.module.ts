import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { PhotoGalleryPageComponent } from './photo-gallery-page/photo-gallery-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsPageComponent } from './news-page/news-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, SharedModule
  ],
  declarations: [LandingPageComponent, PhotoGalleryPageComponent, HomePageComponent, NewsPageComponent, ContactPageComponent]
})
export class PagesModule { }
