import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { BreadcrumbComponent } from './breadcrumb.component';
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationPipesModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [
    BreadcrumbComponent
  ]
})
export class BreadcrumbModule {}
