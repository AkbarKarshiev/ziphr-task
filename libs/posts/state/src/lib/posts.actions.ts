import { HttpErrorResponse } from "@angular/common/http";
import { createAction, props } from '@ngrx/store';


import { Post } from "@ziphr-task/posts/common";


export const init = createAction('[Posts] Init');

export const restore = createAction('[Posts] Restore', props<{ posts: Post[] | [] }>());

export const load = createAction('[Posts] Load');

export const loadSuccess = createAction('[Posts] Load Success', props<{ posts: Post[] | [] }>());

export const loadFailure = createAction('[Posts] Load Failure', props<{ error: HttpErrorResponse }>());
