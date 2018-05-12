import {Component} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {ModalDialogParams} from 'nativescript-angular/directives/dialogs';


@Component({
  moduleId: module.id,
  selector: 'details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  constructor(private router: RouterExtensions, private params: ModalDialogParams) {
    console.log('params: ', params.context.msg);
  }

  public goBack(): void {
    this.router.back();
  }

  public close(): void {
    this.params.closeCallback('Closed the modal ====');
  }
}
