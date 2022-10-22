import { Component, VERSION } from '@angular/core';
import { Colors } from './shared/model/app-white-label/colors.vm';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  color: Colors;
  constructor() {
    this.color = new Colors();
    console.log(this.color);
  }

  ngOnInit(): void {
    this.color.menuDarkColor = 'red';
    console.log(this.color);
  }
}
