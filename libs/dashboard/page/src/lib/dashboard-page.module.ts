import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardBodyModule, CardFooterModule, CardHeaderModule, CardModule } from "@ziphr-task/ui/card";
import { PostsListModule } from "@ziphr-task/dashboard/ui/posts-list";
import { PhotosListModule } from "@ziphr-task/dashboard/ui/photos-list";

import { DashboardPageRoutingModule } from "./dashboard-page-routing.module";

import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardPageRoutingModule,
    CardModule,
    CardHeaderModule,
    CardBodyModule,
    CardFooterModule,
    PostsListModule,
    PhotosListModule
  ],
  declarations: [DashboardPageComponent],
})
export class DashboardPageModule {}
