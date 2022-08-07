import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@ziphr-task/core/navigation/common';
import { LayoutComponent } from '@ziphr-task/ui/layout';
import { UserGuard, UsersGuardsModule } from "@ziphr-task/users/guards";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.dashboard,
        loadChildren: () => import('@ziphr-task/dashboard/page').then((modules) => modules.DashboardPageModule),
      },
      {
        path: NAVIGATION_PATHS.posts,
        loadChildren: () => import('@ziphr-task/posts/page').then((modules) => modules.PostsPageModule),
      },
      {
        path: NAVIGATION_PATHS.albums,
        loadChildren: () => import('@ziphr-task/albums/page').then((modules) => modules.AlbumsPageModule),
      },
      {
        path: NAVIGATION_PATHS.photos,
        loadChildren: () => import('@ziphr-task/photos/page').then((modules) => modules.PhotosPageModule),
      },
      {
        path: NAVIGATION_PATHS.user,
        canActivate: [UserGuard],
        loadChildren: () => import('@ziphr-task/users/page').then((modules) => modules.UserPageModule),
      },
      {
        path: '', redirectTo: NAVIGATION_PATHS.dashboard, pathMatch: 'full'
      },
      {
        path: '**', redirectTo: NAVIGATION_PATHS.dashboard
      }
    ]
  }
]

@NgModule({
  imports: [
    UsersGuardsModule,
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledNonBlocking',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
