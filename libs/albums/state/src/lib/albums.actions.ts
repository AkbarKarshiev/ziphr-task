import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { Album } from "@ziphr-task/albums/common";

export const init = createAction('[Albums] Init');

export const restore = createAction('[Albums] Restore', props<{ albums: Album[] | [] }>());

export const load = createAction('[Albums] Load');

export const loadSuccess = createAction('[Albums] Load Success', props<{ albums: Album[] | [] }>());

export const loadFailure = createAction('[Albums] Load Failure', props<{ error: HttpErrorResponse }>());
