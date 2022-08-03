import { Injectable } from '@angular/core';
import { RouterStateSnapshot } from "@angular/router";
import { RouterReducerStateExtended } from "./root.reducer";
import { RouterStateSerializer } from "@ngrx/router-store";

@Injectable()
export class RootRouterStateSerializerService implements RouterStateSerializer<RouterReducerStateExtended> {
  serialize(routerState: RouterStateSnapshot): RouterReducerStateExtended {
    let route = routerState.root;

    while (route.firstChild) {
      route = route.firstChild;
    }

    const {
      url,
      root: { queryParams }
    } = routerState;

    const { params, data } = route;

    return { url, params, queryParams, data };
  }
}
