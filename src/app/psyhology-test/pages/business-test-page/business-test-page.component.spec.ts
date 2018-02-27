import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessTestPageComponent } from './business-test-page.component';

describe('BusinessTestPageComponent', () => {
  let component: BusinessTestPageComponent;
  let fixture: ComponentFixture<BusinessTestPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [BusinessTestPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
