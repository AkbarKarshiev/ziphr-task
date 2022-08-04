import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderModule } from './components/header/header.module';
import { LogoModule } from "./components/logo/logo.module";
import { MenuModule } from "./components/menu/menu.module";
import { SidebarModule } from './components/sidebar/sidebar.module';
import { LayoutComponent } from './layout.component';

@NgModule({
  imports: [CommonModule, HeaderModule, SidebarModule, RouterModule, LogoModule, MenuModule],
  declarations: [LayoutComponent],
  exports: [LayoutComponent],
})
export class LayoutModule {}
