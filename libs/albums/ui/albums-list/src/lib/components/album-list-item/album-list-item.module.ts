import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { CardModule } from "@ziphr-task/ui/card";

import { AlbumListItemComponent } from './album-list-item.component';

@NgModule({
  declarations: [AlbumListItemComponent],
  imports: [CommonModule, CardModule, RouterModule, NavigationPipesModule],
  exports: [AlbumListItemComponent]
})
export class AlbumListItemModule {}
