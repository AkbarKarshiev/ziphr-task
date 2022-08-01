import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { VerticalPostsListItemComponent } from './vertical-posts-list-item.component';

@NgModule({
  declarations: [VerticalPostsListItemComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  exports: [VerticalPostsListItemComponent]
})
export class VerticalPostsListItemModule {}
