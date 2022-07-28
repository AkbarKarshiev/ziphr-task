import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { NAVIGATION_PATHS, PATHS } from "@ziphr-task/core/navigation/common";

import { environment } from '../environments/environment';

@NgModule({
  imports: [
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [
    {
      provide: PATHS,
      useValue: NAVIGATION_PATHS
    }
  ],
})
export class AppCoreModule {}
