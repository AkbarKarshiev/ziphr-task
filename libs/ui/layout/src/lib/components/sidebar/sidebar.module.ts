import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    LogoModule,
    MenuModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
