import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupDialogsComponent } from './popup-dialogs.component';

describe('PopupDialogsComponent', () => {
  let component: PopupDialogsComponent;
  let fixture: ComponentFixture<PopupDialogsComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [PopupDialogsComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupDialogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
