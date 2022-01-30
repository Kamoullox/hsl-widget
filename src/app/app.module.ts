import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HslWidgetComponent } from './components/hsl-widget/hsl-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    HslWidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
