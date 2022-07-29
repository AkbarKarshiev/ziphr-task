import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardPageComponent } from "./dashboard-page.component";
import { DashboardBannerComponent } from "@ziphr-task/dashboard/ui/banner";

const routes: Routes = [
  {
    path: '',
    outlet: 'top',
    component: DashboardBannerComponent
  },
  {
    path: '',
    component: DashboardPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
