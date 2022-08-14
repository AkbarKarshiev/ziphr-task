import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from "@angular/forms";

import { CardPhotosListModule } from "@ziphr-task/ui/card-photos-list";
import { PaginatorModule } from "@ziphr-task/ui/paginator";

import { AlbumPhotosTableComponent } from './album-photos-table.component';

@NgModule({
  imports: [CommonModule, CardPhotosListModule, PaginatorModule, ReactiveFormsModule],
  declarations: [AlbumPhotosTableComponent],
  exports: [
    AlbumPhotosTableComponent
  ]
})
export class AlbumPhotosTableModule {}
