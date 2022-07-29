import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";

import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
