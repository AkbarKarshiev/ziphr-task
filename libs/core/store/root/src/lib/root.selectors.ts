import { createFeatureSelector, createSelector } from "@ngrx/store";
import { RouterReducerState } from "@ngrx/router-store";

import { RouterReducerStateExtended } from "./root.reducer";

export const ROUTER_KEY = 'router';

export const selectRouterState = createFeatureSelector<RouterReducerState<RouterReducerStateExtended>>(ROUTER_KEY);

export const selectCurrentRouteState = createSelector(selectRouterState, (state: RouterReducerState<RouterReducerStateExtended>) => state.state);