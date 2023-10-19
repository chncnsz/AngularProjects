import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div *appCustomif="false">
    merhaba
  </div>
  <!-- <ul>
    <li *appCustomfor="5; let i = index">Deneme - {{i}}</li>
  </ul> -->
  <ul>
    <li *appCustomfor="names; let name; let index = index">{{name}} - {{index + 1}}</li>
  </ul>

  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proje5';
  names: string[] = ["Ahmet","Hasan","Yusuf","Hayri","Jardel"]
}
