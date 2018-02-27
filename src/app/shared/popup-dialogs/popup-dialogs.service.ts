import { Injectable } from '@angular/core';
import { PopupDialogsComponent } from './popup-dialogs.component';
import { MatDialog } from '@angular/material';

@Injectable()
export class PopupDialogsService {
  constructor(private dialog: MatDialog) {}

  open(message: string, type: string) {
    return this.dialog.open(PopupDialogsComponent, {
      data: {
        message: message,
        type: type
      },
      width: 'auto',
      height: 'auto'
    });
  }
}
