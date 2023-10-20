import { Component } from '@angular/core';
import { CustomPipe } from './pipes/custom.pipe';

@Component({
  selector: 'app-root',
  template: `
  {{name | slice : 1: 4}}
  {{tutar | currency}} <br>
  {{"kurban olam yol ver geçem...." | custom : 10 : 20}}
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private custom : CustomPipe){
    console.log( custom.transform(this.name,3,this.name.length - 1) )
  }
  name = 'denemetest';
  tutar = 10000
}
