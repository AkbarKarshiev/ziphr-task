import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderModule } from './components/header/header.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { LogoModule } from "./components/logo/logo.module";
import { MenuModule } from "./components/menu/menu.module";

@NgModule({
  imports: [CommonModule, HeaderModule, SidebarModule, RouterModule, LogoModule, MenuModule],
  declarations: [LayoutComponent, SidenavComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
