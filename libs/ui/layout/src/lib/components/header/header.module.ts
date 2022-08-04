import { NgModule } from '@angular/core';

import { LogoModule } from "../logo/logo.module";
import { MenuModule } from "../menu/menu.module";
import { SidenavModule } from "../sidenav/sidenav.module";
import { HeaderComponent } from "./header.component";

@NgModule({
  declarations: [HeaderComponent],
  imports: [LogoModule, MenuModule, SidenavModule],
  exports: [HeaderComponent]
})
export class HeaderModule { }
