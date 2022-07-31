import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosListItemComponent } from './photos-list-item.component';
import { RouterModule } from "@angular/router";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  declarations: [PhotosListItemComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  exports: [PhotosListItemComponent]
})
export class PhotosListItemModule {}
