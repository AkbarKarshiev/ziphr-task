import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from "./header.component";
import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    LogoModule,
    MenuModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
