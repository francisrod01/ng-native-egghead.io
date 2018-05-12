import {Component} from '@angular/core';
import {RouterExtensions} from 'nativescript-angular/router';


@Component({
  moduleId: module.id,
  selector: 'details',
  templateUrl: './details.component.html'
})

export class DetailsComponent {
  constructor(private router: RouterExtensions) { }

  public goBack(): void {
    this.router.back();
  }
}
