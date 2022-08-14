import { of } from "rxjs";
import { instance, mock, verify, when } from "ts-mockito";

import { ApiService } from "@ziphr-task/core/api/service";
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from "@ziphr-task/core/environments/service";
import { POST_STUB, PostResponse, POSTS_RESPONSE_STUB, PostsResponse } from "@ziphr-task/posts/common";

import { PostsApiService } from './posts-api.service';

describe('PostsApiService', () => {
  let service: PostsApiService;
  let apiServiceMock: ApiService;
  let environmentServiceMock: EnvironmentService;
  const postId = '1';

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    environmentServiceMock = mock(environmentServiceMock);
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);

    service = new PostsApiService(instance(apiServiceMock), instance(environmentServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadPosts()', () => {
    when(apiServiceMock.get<PostsResponse>(service.getPostsApiRoute())).thenReturn(of(POSTS_RESPONSE_STUB));

    service.loadPosts();

    verify(apiServiceMock.get(service.getPostsApiRoute())).once();
  });

  it('should call loadOnePost()', () => {
    when(apiServiceMock.get<PostResponse>(service.getPostApiRoute(postId))).thenReturn(of(POST_STUB));

    service.loadOnePost(postId);

    verify(apiServiceMock.get(service.getPostApiRoute(postId))).once();
  });
});
