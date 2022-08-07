import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { AlbumPhotosTableModule } from "@ziphr-task/albums/ui/album-photos-table";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { AlbumPageComponent } from './album-page.component';

@NgModule({
  declarations: [AlbumPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    NavigationPipesModule,
    BreadcrumbModule,
    AlbumPhotosTableModule
  ],
  exports: [AlbumPageComponent]
})
export class AlbumPageModule {}
