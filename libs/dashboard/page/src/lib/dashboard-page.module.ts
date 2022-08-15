import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardModule } from "@ziphr-task/ui/card";
import { VerticalPhotosListModule } from "@ziphr-task/ui/vertical-photos-list";
import { VerticalPostsListModule } from "@ziphr-task/ui/vertical-posts-list";

import { DashboardPageComponent } from './dashboard-page.component';
import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    CardModule,
    VerticalPostsListModule,
    VerticalPhotosListModule
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
