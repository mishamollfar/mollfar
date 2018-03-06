import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  message: string;
  type: 'confirm' | 'alert' | 'info';
}

@Component({
  selector: 'ml-popup-dialogs',
  templateUrl: './popup-dialogs.component.html',
  styleUrls: ['./popup-dialogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PopupDialogsComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public dialogRef: MatDialogRef<PopupDialogsComponent>
  ) {}

  ngOnInit() {}

  access() {
    this.dialogRef.close(true);
  }
}
