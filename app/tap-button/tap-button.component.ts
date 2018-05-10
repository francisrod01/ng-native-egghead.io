import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-tap-button',
  moduleId: module.id,
  templateUrl: './tap-button.component.html'
})

export class TapButtonComponent implements OnInit {
  message: String;

  constructor() {}

  onTap() {
    this.message = "I'm tapping the button";

    console.log(this.message);
  }

  ngOnInit(): void {}
}
