import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { CardPhotosListModule } from "@ziphr-task/ui/card-photos-list";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumPageComponent } from './album-page.component';

@NgModule({
  declarations: [AlbumPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationPipesModule,
    NgbPaginationModule,
    CardPhotosListModule,
    BreadcrumbModule
  ],
  exports: [AlbumPageComponent]
})
export class AlbumPageModule {}
