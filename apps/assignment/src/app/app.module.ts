import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from './app.component';
import { AppCoreModule } from "./app.core.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppCoreModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  exports: [
    AppComponent
  ]
})
export class AppModule {}
