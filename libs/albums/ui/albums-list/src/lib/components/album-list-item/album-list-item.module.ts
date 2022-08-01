import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from "@ziphr-task/ui/card";

import { AlbumListItemComponent } from './album-list-item.component';
import { RouterModule } from "@angular/router";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  declarations: [AlbumListItemComponent],
  imports: [CommonModule, CardModule, RouterModule, NavigationPipesModule],
  exports: [AlbumListItemComponent]
})
export class AlbumListItemModule {}
