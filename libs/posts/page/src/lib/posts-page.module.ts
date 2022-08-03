import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsPageRoutingModule } from "./posts-page-routing.module";

import { PostsPageComponent } from './posts-page.component';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

@NgModule({
  imports: [
    CommonModule,
    PostsPageRoutingModule,
    NgbPaginationModule,
    BreadcrumbModule
  ],
  declarations: [PostsPageComponent],
})
export class PostsPageModule {}
