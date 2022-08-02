import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { Post, PostsResponse } from "@ziphr-task/posts/common";

@Injectable()
export class PostsApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadPosts(): Observable<Post[]> {
    return this.apiService.get<PostsResponse>(this.getPostsApiRoute());
  }

  loadOnePost(id: string): Observable<Post> {
    return this.apiService.get<Post>(this.getPostApiRoute(id));
  }

  getPostsApiRoute(): string {
    return this.environmentService.environments.api + '/posts';
  }

  getPostApiRoute(id: string): string {
    return this.environmentService.environments.api + `/posts/${id}`;
  }
}
