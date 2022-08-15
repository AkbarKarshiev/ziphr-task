import { NgModule } from '@angular/core';

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidebarComponent } from "./sidebar.component";

@NgModule({
  declarations: [SidebarComponent],
  imports: [LogoModule, MenuModule],
  exports: [SidebarComponent]
})
export class SidebarModule { }
