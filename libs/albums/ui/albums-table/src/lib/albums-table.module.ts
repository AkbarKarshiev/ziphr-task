import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbumsTableComponent } from './albums-table.component';
import { AlbumsListModule } from "@ziphr-task/albums/ui/albums-list";
import { PaginatorModule } from "@ziphr-task/ui/paginator";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [CommonModule, AlbumsListModule, PaginatorModule, ReactiveFormsModule],
  declarations: [AlbumsTableComponent],
  exports: [
    AlbumsTableComponent
  ]
})
export class AlbumsTableModule {}
