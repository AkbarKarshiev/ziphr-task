import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { DashboardPageComponent } from "./dashboard-page.component";
import { DashboardBannerComponent, DashboardBannerModule } from "@ziphr-task/dashboard/ui/banner";

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
  imports: [RouterModule.forChild(routes), DashboardBannerModule],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule { }
