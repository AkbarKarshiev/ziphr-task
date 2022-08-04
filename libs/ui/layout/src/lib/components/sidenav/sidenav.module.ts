import { NgModule } from '@angular/core';

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidenavComponent } from "./sidenav.component";

@NgModule({
  declarations: [SidenavComponent],
  imports: [LogoModule, MenuModule],
  exports: [SidenavComponent]
})
export class SidenavModule { }
