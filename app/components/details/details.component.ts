import {Component} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';
import {ModalDialogParams} from 'nativescript-angular/directives/dialogs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';


@Component({
  moduleId: module.id,
  selector: 'details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  public items$: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor(private router: RouterExtensions, private params: ModalDialogParams) {
    console.log('constructor params: ', params.context.msg);

    const items: any[] = [
      { title: 'NativeScript' },
      { title: 'Angular' },
      { title: 'TypeScript' },
      { title: 'JavaScript' }
    ];

    let cnt = 0;
    let timer = setInterval(() => {
      if (cnt < 4) {
        this.items$.next([...this.items$.getValue(), items[cnt]]);
        cnt++;
      }
      else {
        clearInterval(timer);
      }
    }, 1000);
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
