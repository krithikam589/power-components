import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PowerComponentsModule } from 'projects/power-components/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PowerComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
