import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { CardPhotosListItemComponent } from './card-photos-list-item.component';
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  imports: [RouterModule, NavigationPipesModule],
  declarations: [CardPhotosListItemComponent],
  exports: [CardPhotosListItemComponent]
})
export class CardPhotosListItemModule {}
