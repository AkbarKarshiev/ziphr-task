import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ENVIRONMENTS } from "@ziphr-task/core/environments/service";
import { NAVIGATION_PATHS, PATHS } from "@ziphr-task/core/navigation/common";
import { PostsStateModule } from "@ziphr-task/posts/state";

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    HttpClientModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    PostsStateModule
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
