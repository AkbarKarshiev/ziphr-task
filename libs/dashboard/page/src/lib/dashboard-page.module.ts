import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";

import { DashboardPageComponent } from './dashboard-page.component';
import { CardBodyModule, CardFooterModule, CardHeaderModule, CardModule } from "@ziphr-task/ui/card";

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    CardModule,
    CardHeaderModule,
    CardBodyModule,
    CardFooterModule
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
