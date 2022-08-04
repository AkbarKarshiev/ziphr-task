import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { AlbumsListModule } from "@ziphr-task/albums/ui/albums-list";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumsPageComponent } from './albums-page.component';
import { AlbumsPageRoutingModule } from "./albums-page-routing.module";

@NgModule({
  imports: [
    CommonModule,
    AlbumsPageRoutingModule,
    NgbPaginationModule,
    AlbumsListModule,
    BreadcrumbModule,
  ],
  declarations: [AlbumsPageComponent],
})
export class AlbumsPageModule {}
