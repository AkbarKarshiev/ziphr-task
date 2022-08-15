import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { CardPhotosListItemComponent } from './card-photos-list-item.component';

@NgModule({
  imports: [RouterModule, NavigationPipesModule, CommonModule],
  declarations: [CardPhotosListItemComponent],
  exports: [CardPhotosListItemComponent]
})
export class CardPhotosListItemModule {}
