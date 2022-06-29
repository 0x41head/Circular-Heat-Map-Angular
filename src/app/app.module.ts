import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CircularHeatmapComponent } from './circular-heatmap/circular-heatmap.component';

@NgModule({
  declarations: [
    AppComponent,
    CircularHeatmapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
