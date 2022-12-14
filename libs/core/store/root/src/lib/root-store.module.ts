import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { StoreRouterConnectingModule } from "@ngrx/router-store";

import { rootInitialState, rootReducers } from "./root.reducer";
import { RootRouterStateSerializerService } from "./root-router-state-serializer.service";
import { RootStateFacade } from "./root-state.facade";

@NgModule({
  imports: [
    RouterModule,
    StoreModule.forRoot(rootReducers, {
      initialState: rootInitialState,
      metaReducers: []
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({
      serializer: RootRouterStateSerializerService
    })
  ],
  providers: [RootStateFacade]
})
export class RootStoreModule {}
