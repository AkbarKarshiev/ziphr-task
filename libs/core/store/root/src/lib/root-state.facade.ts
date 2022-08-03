import { Injectable } from "@angular/core";
import { Actions } from "@ngrx/effects";
import { Store } from "@ngrx/store";

import { selectCurrentRouteState } from "./root.selectors";

@Injectable()
export class RootStateFacade {
  currentRouteState$ = this.store.select(selectCurrentRouteState);

  constructor(private readonly actions$: Actions, private readonly store: Store) {}
}
