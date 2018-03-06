import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PopupDialogsService } from '../../../shared/popup-dialogs/popup-dialogs.service';
import { testOrganizator } from './questions';
import { answersTest, variantAnswer } from './answer';

@Component({
  selector: 'ml-organizational-test-page',
  templateUrl: './organizational-test-page.component.html',
  styleUrls: ['./organizational-test-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizationalTestPageComponent implements OnInit {
  questions;
  answers;
  equalTest = false;
  organizatorTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private info: PopupDialogsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {
    this.questions = testOrganizator;
    this.answers = variantAnswer;
    this.organizatorTest = this.fb.group({});
  }

  ngOnInit() {}

  clearForm() {
    this.organizatorTest.reset();
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
        this.router.navigateByUrl(rs ? '/tests/list' : '/tests/organizational');
      });
  }

  getAnswer() {
    let message;
    const answer = this.getSummer();

    if (answer < 40) {
      message = answersTest['0'];
    } else if (answer >= 40 && answer < 70) {
      message = answersTest['40'];
    } else {
      message = answersTest['70'];
    }

    return message;
  }

  getSummer() {
    const answerA = this.getNumberAnswer('A').filter(item => item === 'true').length;
    const answerB = this.getNumberAnswer('B').filter(item => item === 'false').length;

    return (answerA + answerB) * 100 / 20;
  }

  getNumberAnswer(typeAnswer: 'A' | 'B') {
    const numberAnswer =
      typeAnswer === 'A' ? [1, 3, 5, 7, 9, 11, 13, 17, 18, 19, 20] : [2, 4, 6, 8, 10, 12, 14, 15, 16];
    const answerKey = Object.keys(this.organizatorTest.value).map(item => this.getElementArray(numberAnswer, item));

    return answerKey.filter(item => item);
  }

  getElementArray(numberAnswer, item) {
    if (numberAnswer.indexOf(this.getStringMatchNumber(item)) > -1) {
      return this.convertAnswerTonumber(this.organizatorTest.value[item]);
    }
  }
  getStringMatchNumber(item) {
    return +item.match(/\d+/)[0];
  }

  convertAnswerTonumber(answer) {
    switch (answer) {
      case 'a':
        return 'true';
      default:
        return 'false';
    }
  }
}
