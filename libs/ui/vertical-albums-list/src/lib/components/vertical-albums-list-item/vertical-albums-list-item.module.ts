import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { VerticalAlbumsListItemComponent } from "./vertical-albums-list-item.component";

@NgModule({
  declarations: [VerticalAlbumsListItemComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  exports: [VerticalAlbumsListItemComponent]
})
export class VerticalAlbumsListItemModule { }
