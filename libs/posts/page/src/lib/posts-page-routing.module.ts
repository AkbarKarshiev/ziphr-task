import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

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
    component: PostPageComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes), PostPageModule],
  exports: [RouterModule]
})
export class PostsPageRoutingModule { }
