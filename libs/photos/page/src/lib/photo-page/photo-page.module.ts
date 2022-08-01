import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { PhotoPageComponent } from './photo-page.component';
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  declarations: [PhotoPageComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  exports: [PhotoPageComponent]
})
export class PhotoPageModule {}
