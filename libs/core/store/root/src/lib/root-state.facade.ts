import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { selectCurrentRouteState, selectParams } from "./root.selectors";

@Injectable()
export class RootStateFacade {
  currentRouteState$ = this.store.select(selectCurrentRouteState);
  routeParams$ = this.store.select(selectParams);

  constructor(private readonly actions$: Actions, private readonly store: Store) {}
}
