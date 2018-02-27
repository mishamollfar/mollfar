import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ListPageComponent } from './list-page/list-page.component';
import { SelfEsteemTestPageComponent } from './self-esteem-test-page/self-esteem-test-page.component';
import { AnxietyLevelTestPageComponent } from './anxiety-level--test-page/anxiety-level--test-page.component';
import { ContactLevelTestPageComponent } from './contact-level-test-page/contact-level-test-page.component';
import { OrganizationalTestPageComponent } from './organizational-test-page/organizational-test-page.component';
import { BusinessTestPageComponent } from './business-test-page/business-test-page.component';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [
    ListPageComponent,
    SelfEsteemTestPageComponent,
    AnxietyLevelTestPageComponent,
    ContactLevelTestPageComponent,
    OrganizationalTestPageComponent,
    BusinessTestPageComponent
  ]
})
export class PagesModule {}
