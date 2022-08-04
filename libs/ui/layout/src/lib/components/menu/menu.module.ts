import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { MenuComponent } from "./menu.component";

@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, RouterModule, NavigationPipesModule],
  exports: [MenuComponent]
})
export class MenuModule { }
