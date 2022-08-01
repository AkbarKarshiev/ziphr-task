import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { VerticalPhotosListItemComponent } from './vertical-photos-list-item.component';

@NgModule({
  declarations: [VerticalPhotosListItemComponent],
  imports: [NavigationPipesModule, RouterModule],
  exports: [VerticalPhotosListItemComponent]
})
export class VerticalPhotosListItemModule {}
