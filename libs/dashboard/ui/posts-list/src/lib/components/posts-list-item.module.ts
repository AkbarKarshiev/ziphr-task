import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { PostListItemComponent } from './post-list-item.component';

@NgModule({
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  declarations: [PostListItemComponent],
  exports: [PostListItemComponent]
})
export class PostsListItemModule {}
