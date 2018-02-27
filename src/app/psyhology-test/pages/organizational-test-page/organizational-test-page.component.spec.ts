import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationalTestPageComponent } from './organizational-test-page.component';

describe('OrganizationalTestPageComponent', () => {
  let component: OrganizationalTestPageComponent;
  let fixture: ComponentFixture<OrganizationalTestPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [OrganizationalTestPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationalTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
