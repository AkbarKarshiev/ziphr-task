import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumPhotosTableComponent } from './album-photos-table.component';
import { CardPhotosListModule } from "@ziphr-task/ui/card-photos-list";
import { PaginatorModule } from "@ziphr-task/ui/paginator";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, CardPhotosListModule, PaginatorModule, ReactiveFormsModule],
  declarations: [AlbumPhotosTableComponent],
  exports: [
    AlbumPhotosTableComponent
  ]
})
export class AlbumPhotosTableModule {}
