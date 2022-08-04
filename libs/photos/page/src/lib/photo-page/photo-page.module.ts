import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PhotoPageComponent } from './photo-page.component';

@NgModule({
  declarations: [PhotoPageComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule, BreadcrumbModule],
  exports: [PhotoPageComponent]
})
export class PhotoPageModule {}
