import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {PopupDialogsService} from '../../../shared/popup-dialogs/popup-dialogs.service';
import {testAnxiety} from './questions';
import {answersTest, variantAnswer} from './answer';

@Component({
  selector: 'ml-anxiety-level--test-page',
  templateUrl: './anxiety-level--test-page.component.html',
  styleUrls: ['./anxiety-level--test-page.component.scss']
})
export class AnxietyLevelTestPageComponent implements OnInit {

  questions;
  answersControl;
  answers;
  questionsControl;
  equalTest = false;
  anxietyTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private info: PopupDialogsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = testAnxiety;
    this.answers = variantAnswer;
    this.answersControl = Object.keys(variantAnswer);
    this.questionsControl = Object.keys(testAnxiety);
    this.initForm();
  }

  initForm() {
    this.anxietyTest = this.fb.group({});
    this.createFormControl();
  }

  createFormControl() {
    this.questionsControl.forEach(key => {
      this.anxietyTest.setControl(key, this.fb.control('', [Validators.required]));
    });
  }

  clearForm() {
    this.anxietyTest.reset();
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
        this.router.navigateByUrl(rs ? '/tests/list' : '/tests/anxiety-level');
      });
  }

  getAnswer() {
    let message;
    const answer = this.getSummer();

    if (answer < 30) {
      message = answersTest['0'];
    } else if (answer >= 30 && answer < 45) {
      message = answersTest['30'];
    } else {
      message = answersTest['45'];
    }

    return message;
  }

  getSummer() {
    const answerA = this.getNumberAnswer('A').reduce((sum, _current) => sum + _current, 0);
    const answerB = this.getNumberAnswer('B').reduce((sum, _current) => sum + _current, 0);

    return answerA - answerB;
  }

  getNumberAnswer(typeAnswer: 'A' | 'B') {
    const numberAnswer = typeAnswer === 'A' ? [1, 6, 7, 10, 13, 16, 18] : [2, 3, 4, 5, 8, 9, 11, 12, 14, 15, 17, 20];
    const answerKey = Object.keys(this.anxietyTest.value).map(item => this.getElementArray(numberAnswer, item));

    return answerKey.filter(item => !!item);
  }

  getElementArray(numberAnswer, item) {
    if (numberAnswer.indexOf(this.getStringMatchNumber(item)) > -1) {
      return this.convertAnswerTonumber(this.anxietyTest.value[item]);
    }
  }
  getStringMatchNumber(item) {
    return +item.match(/\d+/)[0];
  }

  convertAnswerTonumber(answer) {
    switch (answer) {
      case 'a':
        return 4;
      case 'b':
        return 3;
      case 'c':
        return 2;
      default:
        return 1;
    }
  }
}
