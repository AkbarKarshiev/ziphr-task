import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { PostGuard, PostsGuardsModule } from "@ziphr-task/posts/guards";

import { PostPageModule } from "./post-page/post-page.module";

import { PostsPageComponent } from "./posts-page.component";
import { PostPageComponent } from "./post-page/post-page.component";

const routes: Routes = [
  {
    path: '',
    component: PostsPageComponent,
  },
  {
    path: ':id',
    component: PostPageComponent,
    canActivate: [PostGuard]
  }
]

@NgModule({
  imports: [
    PostsGuardsModule,
    RouterModule.forChild(routes),
    PostPageModule,
  ],
  exports: [RouterModule]
})
export class PostsPageRoutingModule { }
