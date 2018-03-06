import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { PopupDialogsService } from '../../../shared/popup-dialogs/popup-dialogs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { testSelfEsteem } from './questions';
import { answersTest, variantAnswer } from './answer';

@Component({
  selector: 'ml-self-esteem-test-page',
  templateUrl: './self-esteem-test-page.component.html',
  styleUrls: ['./self-esteem-test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelfEsteemTestPageComponent implements OnInit {
  questions;
  answers;
  equalTest = false;
  selfEsteemTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private info: PopupDialogsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.questions = testSelfEsteem;
    this.answers = variantAnswer;
    this.selfEsteemTest = this.fb.group({});
  }

  ngOnInit() {}

  clearForm() {
    this.selfEsteemTest.reset();
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
        this.router.navigateByUrl(rs ? '/tests/list' : '/tests/self-esteem');
      });
  }

  getSummer() {
    const numberArray = Object.keys(this.selfEsteemTest.value).map(item =>
      this.convertAnswerTonumber(this.selfEsteemTest.value[item])
    );

    return numberArray.reduce((sum, _current) => sum + _current, 0);
  }

  convertAnswerTonumber(answer) {
    switch (answer) {
      case 'a':
        return 4;
      case 'b':
        return 3;
      case 'c':
        return 2;
      case 'd':
        return 1;
      default:
        return 0;
    }
  }

  getAnswer() {
    let message;
    const answer = this.getSummer();

    if (answer <= 25) {
      message = answersTest['0'];
    } else if (answer > 25 && answer <= 46) {
      message = answersTest['26'];
    } else {
      message = answersTest['46'];
    }

    return message;
  }
}
