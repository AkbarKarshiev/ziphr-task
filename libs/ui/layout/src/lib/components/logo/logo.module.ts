import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from "./logo.component";
import { NavigationPipesModule } from "@ziphr-task/core/navigation/ui/pipes";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [LogoComponent],
  imports: [
    CommonModule,
    NavigationPipesModule,
    RouterModule
  ],
  exports: [LogoComponent]
})
export class LogoModule { }
