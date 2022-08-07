import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { PaginatorModule } from "@ziphr-task/ui/paginator";

import { PostsTableComponent } from './posts-table.component';
import { SortIconModule } from "@ziphr-task/ui/sort-icon";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NavigationPipesModule,
    PaginatorModule,
    SortIconModule
  ],
  declarations: [PostsTableComponent],
  exports: [PostsTableComponent]
})
export class PostsTableModule {}
