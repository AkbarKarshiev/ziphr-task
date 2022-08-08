import { APP_INITIALIZER, NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PostsApiModule } from "@ziphr-task/posts/api";

import { PostsEffects } from './posts.effects';
import { PostsFacade } from './posts.facade';
import * as fromPosts from './posts.reducer';

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
