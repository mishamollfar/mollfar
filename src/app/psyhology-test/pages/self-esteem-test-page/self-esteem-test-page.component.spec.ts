import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfEsteemTestPageComponent } from './self-esteem-test-page.component';

describe('SelfEsteemTestPageComponent', () => {
  let component: SelfEsteemTestPageComponent;
  let fixture: ComponentFixture<SelfEsteemTestPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [SelfEsteemTestPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfEsteemTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
