import { NgModule } from '@angular/core';

import { PostsApiService } from "./posts-api.service";

@NgModule({
  providers: [PostsApiService]
})
export class PostsApiModule {}
