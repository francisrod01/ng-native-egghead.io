import {Component, ViewContainerRef} from '@angular/core';
import {ModalDialogService, ModalDialogOptions} from 'nativescript-angular/directives/dialogs';

import {DetailsComponent} from '../details/details.component';

@Component({
  moduleId: module.id,
  selector: 'about',
  templateUrl: './about.component.html'
})

export class AboutComponent {
  constructor(private modal: ModalDialogService, private viewRef: ViewContainerRef) { }

  public openModal(): void {
    const options: ModalDialogOptions = {
      context: { msg: 'Hello' },
      viewContainerRef: this.viewRef
    }
    this.modal.showModal(DetailsComponent, options).then(result => {
      console.dir('=== show modal called: ', result);
    });
  }
}
