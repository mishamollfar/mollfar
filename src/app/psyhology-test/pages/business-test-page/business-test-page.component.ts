import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { testBusiness } from './questions';
import { answerTest } from './answer-test';
import { PopupDialogsService } from '../../../shared/popup-dialogs/popup-dialogs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ml-business-test-page',
  templateUrl: './business-test-page.component.html',
  styleUrls: ['./business-test-page.component.scss']
})
export class BusinessTestPageComponent implements OnInit {
  questions;
  answers = ['a', 'b', 'c'];
  questionsControl;
  equalTest = false;
  businessTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private info: PopupDialogsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = testBusiness;
    this.questionsControl = Object.keys(this.questions);
    this.initForm();
  }
  
  initForm() {
    this.businessTest = this.fb.group({});
    this.createFormControl();
  }

  createFormControl() {
    this.questionsControl.forEach(key => {
      this.businessTest.setControl(key, this.fb.control('', [Validators.required]));
    });
  }

  clearForm() {
    this.businessTest.reset();
  }

  equalResponse() {
    this.equalTest = true;
    const dialogMsg = this.getAnswer();
    this.info
      .open(dialogMsg, 'info')
      .afterClosed()
      .finally(() => {
        this.equalTest = false;
        this.cd.detectChanges();
      })
      .subscribe(rs => {
        if (!rs) {
          this.clearForm();
        }
        this.router.navigateByUrl(rs ? '/tests/list' : '/tests/business');
      });
  }

  getCountAnswer() {
    let a = 0;
    let b = 0;
    let c = 0;
    const responseArray = Object.keys(this.businessTest.value).map(item => this.businessTest.value[item]);

    responseArray.forEach(key => {
      if (key === 'a') {
        a++;
      } else if (key === 'b') {
        b++;
      } else {
        c++;
      }
    });

    return { a: a, b: b, c: c };
  }

  getAnswer() {
    const counts = this.getCountAnswer();
    let message;
    const answer = Math.max(counts.a, counts.b, counts.c);

    if (answer === counts.a) {
      message = answerTest.a;
    } else if (answer === counts.b) {
      message = answerTest.b;
    } else if (answer === counts.c) {
      message = answerTest.c;
    } else if (answer === counts.a && answer === counts.c) {
      message = answerTest.ac;
    } else if (answer === counts.a && answer === counts.b) {
      message = answerTest.ab;
    } else {
      message = answerTest.bc;
    }

    return message;
  }
}
