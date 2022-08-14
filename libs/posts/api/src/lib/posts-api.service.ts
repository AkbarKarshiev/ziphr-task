import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { PostResponse, PostsResponse } from "@ziphr-task/posts/common";

@Injectable()
export class PostsApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadPosts(): Observable<PostsResponse> {
    return this.apiService.get<PostsResponse>(this.getPostsApiRoute());
  }

  loadOnePost(id: string): Observable<PostResponse> {
    return this.apiService.get<PostResponse>(this.getPostApiRoute(id));
  }

  getPostsApiRoute(): string {
    return this.environmentService.environments.api + '/posts';
  }

  getPostApiRoute(id: string): string {
    return this.environmentService.environments.api + `/posts/${id}`;
  }
}
