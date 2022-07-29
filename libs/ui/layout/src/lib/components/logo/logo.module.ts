import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";

import { LogoComponent } from "./logo.component";

@NgModule({
  declarations: [LogoComponent],
  imports: [NavigationPipesModule, RouterModule],
  exports: [LogoComponent]
})
export class LogoModule { }
