import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BusinessTestPageComponent } from './pages/business-test-page/business-test-page.component';
import { OrganizationalTestPageComponent } from './pages/organizational-test-page/organizational-test-page.component';
import { ContactLevelTestPageComponent } from './pages/contact-level-test-page/contact-level-test-page.component';
import { AnxietyLevelTestPageComponent } from './pages/anxiety-level--test-page/anxiety-level--test-page.component';
import { SelfEsteemTestPageComponent } from './pages/self-esteem-test-page/self-esteem-test-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: ListPageComponent, data: { title: 'Список тестів' } },
  { path: 'business', component: BusinessTestPageComponent, data: { title: 'Бізнес-жилка' } },
  { path: 'organizational', component: OrganizationalTestPageComponent, data: { title: 'Організаторські зібності' } },
  { path: 'contact-level', component: ContactLevelTestPageComponent, data: { title: 'Рівень контактності' } },
  { path: 'anxiety-level', component: AnxietyLevelTestPageComponent, data: { title: 'Рівень тривожності' } },
  { path: 'self-esteem', component: SelfEsteemTestPageComponent, data: { title: 'Самооцінка' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PsyhologyTestRoutingModule {}
