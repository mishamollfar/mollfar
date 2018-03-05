import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'ml-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  answersControl;
  questionsControl;

  @Input() form: FormGroup;
  @Input() answers;
  @Input() questions;
  @Input() equalTest;

  @Output() equal = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.answersControl = Object.keys(this.answers);
    this.questionsControl = Object.keys(this.questions);
    this.createFormControl();
  }

  createFormControl() {
    this.questionsControl.forEach(key => {
      this.form.setControl(key, this.fb.control('', [Validators.required]));
    });
  }

  equalResponse() {
    this.equal.emit();
  }
}
