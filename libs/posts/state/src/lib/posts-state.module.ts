import { APP_INITIALIZER, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { PostsApiModule } from "@ziphr-task/posts/api";

import * as fromPosts from './posts.reducer';

import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';

export function metaServiceFactory(postsFacade: PostsFacade): () => void {
  return (): void => postsFacade.load();
}

@NgModule({
  imports: [
    PostsApiModule,
    StoreModule.forFeature(fromPosts.POSTS_FEATURE_KEY, fromPosts.postsReducer),
    EffectsModule.forFeature([PostsEffects])
  ],
  providers: [
    PostsFacade,
    {
      provide: APP_INITIALIZER,
      useFactory: metaServiceFactory,
      deps: [PostsFacade],
      multi: true
    }
  ],
})
export class PostsStateModule {}
