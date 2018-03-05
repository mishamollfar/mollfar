import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { environment } from '../environments/environment';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewsPageComponent } from './pages/news-page/news-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { PhotoGalleryPageComponent } from './pages/photo-gallery-page/photo-gallery-page.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingPageComponent, data: { title: 'Главная' } },
  { path: 'home', component: HomePageComponent, data: { title: 'Головна' } },
  { path: 'news', component: NewsPageComponent, data: { title: 'Новини' } },
  { path: 'contact', component: ContactPageComponent, data: { title: 'Контакти' } },
  // { path: 'photo', component: PhotoGalleryPageComponent, data: { title: 'Фотогалерея' } },
  { path: 'tests', loadChildren: 'app/psyhology-test/psyhology-test.module#PsyhologyTestModule' },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: environment.production ? PreloadAllModules : NoPreloading })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
