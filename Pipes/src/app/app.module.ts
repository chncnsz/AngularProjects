import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomPipe } from './pipes/custom.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{provide: DEFAULT_CURRENCY_CODE, useValue : '₺'}, CustomPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
