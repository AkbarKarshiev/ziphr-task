import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { NAVIGATION_PATHS } from "@ziphr-task/core/navigation/common";

import { PostsPageComponent } from "./posts-page.component";
import { PostPageComponent } from "./post-page/post-page.component";

const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent,
  },
  {
    path: NAVIGATION_PATHS.post,
    component: PostPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsPageRoutingModule { }
