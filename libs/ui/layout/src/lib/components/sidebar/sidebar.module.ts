import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from "./sidebar.component";
import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";



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
