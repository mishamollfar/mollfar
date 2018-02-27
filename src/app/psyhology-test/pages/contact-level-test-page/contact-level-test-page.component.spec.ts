import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactLevelTestPageComponent } from './contact-level-test-page.component';

describe('ContactLevelTestPageComponent', () => {
  let component: ContactLevelTestPageComponent;
  let fixture: ComponentFixture<ContactLevelTestPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [ContactLevelTestPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactLevelTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
