import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';

import { Photo } from "@ziphr-task/photos/common";

export const init = createAction('[Photos] Init');

export const restore = createAction('[Photos] Restore', props<{ photos: Photo[] | [] }>());

export const load = createAction('[Photos] Load');

export const loadSuccess = createAction('[Photos] Load Success', props<{ photos: Photo[] | [] }>());

export const loadFailure = createAction('[Photos] Load Failure', props<{ error: HttpErrorResponse }>());
