import { NgModule } from '@angular/core';

import { PostsServicesModule } from "@ziphr-task/posts/services";
import { PostsTableModule } from "@ziphr-task/posts/ui/posts-table";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PostsPageComponent } from './posts-page.component';
import { PostsPageRoutingModule } from "./posts-page-routing.module";

@NgModule({
  imports: [
    PostsPageRoutingModule,
    BreadcrumbModule,
    PostsTableModule,
    PostsServicesModule
  ],
  declarations: [PostsPageComponent]
})
export class PostsPageModule {}
