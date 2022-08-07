import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { UserBannerComponent, UserBannerModule } from "@ziphr-task/users/ui/banner";

import { UserPageComponent } from "./user-page.component";

const routes: Routes = [
  {
    path: '',
    outlet: 'top',
    component: UserBannerComponent
  },
  {
    path: '',
    component: UserPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), UserBannerModule],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
