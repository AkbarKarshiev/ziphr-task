import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardBodyModule, CardFooterModule, CardHeaderModule, CardModule } from "@ziphr-task/ui/card";

import { AlbumListItemComponent } from './album-list-item.component';
import { RouterModule } from "@angular/router";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  declarations: [AlbumListItemComponent],
  imports: [CommonModule, CardModule, CardHeaderModule, CardBodyModule, CardFooterModule, RouterModule, NavigationPipesModule],
  exports: [AlbumListItemComponent]
})
export class AlbumListItemModule {}
