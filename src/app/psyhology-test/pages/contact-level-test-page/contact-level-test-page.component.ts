import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PopupDialogsService } from '../../../shared/popup-dialogs/popup-dialogs.service';
import { Router } from '@angular/router';
import { testContact } from './questions';
import { answerTest } from './answer';

@Component({
  selector: 'ml-contact-level-test-page',
  templateUrl: './contact-level-test-page.component.html',
  styleUrls: ['./contact-level-test-page.component.scss']
})
export class ContactLevelTestPageComponent implements OnInit {
  questions;
  answers = ['a', 'b', 'c'];
  questionsControl;
  equalTest = false;
  contactTest: FormGroup;

  constructor(
    private fb: FormBuilder,
    private info: PopupDialogsService,
    private cd: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = testContact;
    this.questionsControl = Object.keys(this.questions);
    this.initForm();
  }

  initForm() {
    this.contactTest = this.fb.group({});
    this.createFormControl();
  }

  createFormControl() {
    this.questionsControl.forEach(key => {
      this.contactTest.setControl(key, this.fb.control('', [Validators.required]));
    });
  }

  clearForm() {
    this.contactTest.reset();
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
        this.router.navigateByUrl(rs ? '/tests/list' : '/tests/contact-level');
      });
  }

  getAnswer() {
    let message;
    const answer = this.getSummer();

    if (answer < 5) {
      message = answerTest['5'];
    } else if (answer >= 6 && answer < 13) {
      message = answerTest['6'];
    } else if (answer >= 13 && answer < 20) {
      message = answerTest['13'];
    } else {
      message = answerTest['20'];
    }

    return message;
  }

  getSummer() {
    const answerUncrypt = this.getNumberAnswer();
    console.log('answerA', answerUncrypt);

    return answerUncrypt.reduce((sum, _current) => sum + _current, 0);
  }

  getNumberAnswer() {
    const typeAnswerA = [2, 5, 7, 8, 10];
    const typeAnswerC = [1, 3, 4, 6, 9];

    return Object.keys(this.contactTest.value).map(item => this.getElementArray(typeAnswerA, typeAnswerC, item));
  }

  getElementArray(typeAnswerA, typeAnswerC, item) {
    if (typeAnswerA.indexOf(this.getStringMatchNumber(item)) > -1) {
      return this.contactTest.value[item] === 'a' ? 2 : 1;
    } else if (typeAnswerC.indexOf(this.getStringMatchNumber(item)) > -1) {
      return this.contactTest.value[item] === 'c' ? 2 : 1;
    } else {
      return 1;
    }
  }
  getStringMatchNumber(item) {
    return +item.match(/\d+/)[0];
  }
}
