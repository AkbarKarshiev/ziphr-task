import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AlbumsStateModule } from "@ziphr-task/albums/state";
import { ENVIRONMENTS } from "@ziphr-task/core/environments/service";
import { NAVIGATION_PATHS, PATHS } from "@ziphr-task/core/navigation/common";
import { RootStoreModule } from "@ziphr-task/core/store/root";
import { PhotosStateModule } from "@ziphr-task/photos/state";
import { PostsStateModule } from "@ziphr-task/posts/state";

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    RootStoreModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PostsStateModule,
    AlbumsStateModule,
    PhotosStateModule
  ],
  providers: [
    {
      provide: ENVIRONMENTS,
      useValue: environment
    },
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS
    }
  ],
})
export class AppCoreModule {}
