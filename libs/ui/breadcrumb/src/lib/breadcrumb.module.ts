import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { BreadcrumbComponent } from './breadcrumb.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationPipesModule
  ],
  declarations: [BreadcrumbComponent],
  exports: [BreadcrumbComponent]
})
export class BreadcrumbModule {}
