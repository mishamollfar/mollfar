import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnxietyLevelTestPageComponent } from './anxiety-level--test-page.component';

describe('AnxietyLevelTestPageComponent', () => {
  let component: AnxietyLevelTestPageComponent;
  let fixture: ComponentFixture<AnxietyLevelTestPageComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [AnxietyLevelTestPageComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AnxietyLevelTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
