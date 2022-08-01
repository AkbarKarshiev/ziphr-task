import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from "@ziphr-task/ui/card";
import { VerticalPostsListModule } from "@ziphr-task/ui/vertical-posts-list";
import { VerticalPhotosListModule } from "@ziphr-task/ui/vertical-photos-list";

import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";

import { DashboardPageComponent } from './dashboard-page.component';

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
