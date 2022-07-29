import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NAVIGATION_PATHS } from '@ziphr-task/core/navigation/common';
import { LayoutComponent } from '@ziphr-task/ui/layout';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: NAVIGATION_PATHS.dashboard,
        loadChildren: () => import('@ziphr-task/dashboard/page').then((modules) => modules.DashboardPageModule),
      },
      // {
      //   path: NAVIGATION_PATHS.posts,
      //   canActivate: [PostGuard],
      //   loadChildren: () => import('@ziphr-task/posts/page').then((modules) => modules.PostsPageModule),
      // }
      {
        path: '', redirectTo: NAVIGATION_PATHS.dashboard, pathMatch: 'full'
      },
      // {
      //   path: '**'
      // }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledNonBlocking',
      scrollPositionRestoration: 'enabled'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
