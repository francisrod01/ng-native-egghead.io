import {Component} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {ModalDialogParams} from 'nativescript-angular/directives/dialogs';


@Component({
  moduleId: module.id,
  selector: 'details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  public items: any[] = [
    { title: 'NativeScript' },
    { title: 'Angular' },
    { title: 'TypeScript' },
    { title: 'JavaScript' }
  ];

  constructor(private router: RouterExtensions, private params: ModalDialogParams) {
    console.log('constructor params: ', params.context.msg);
  }

  public onLoaded(e) {
    console.log('==== onLoaded(e) loaded.', e);
  }

  public onItemLoading(e) {
    console.log('=== onItemLoading(e) loaded.', e);
  }

  public onItemTap(e) {
    console.dir('==== onItemTap(e) loaded.', e);

    for (let key in e) {
      console.log('onItemTap(e) loaded.', `${key}: ${e[key]}`);
    }
  }

  public goBack(): void {
    this.router.back();
  }

  public close(): void {
    this.params.closeCallback('Closed the modal ====');
  }
}
