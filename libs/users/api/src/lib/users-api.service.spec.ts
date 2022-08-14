import { of } from "rxjs";
import { instance, mock, verify, when } from "ts-mockito";

import { ApiService } from "@ziphr-task/core/api/service";
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from "@ziphr-task/core/environments/service";
import { USER_STUB, UserResponse, USERS_RESPONSE_STUB, UsersResponse } from "@ziphr-task/users/common";

import { UsersApiService } from './users-api.service';

describe('UsersApiService', () => {
  let service: UsersApiService;
  let apiServiceMock: ApiService;
  let environmentServiceMock: EnvironmentService;
  const userId = '1';

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    environmentServiceMock = mock(environmentServiceMock);
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);

    service = new UsersApiService(instance(apiServiceMock), instance(environmentServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadUsers()', () => {
    when(apiServiceMock.get<UsersResponse>(service.getUsersApiRoute())).thenReturn(of(USERS_RESPONSE_STUB));

    service.loadUsers();

    verify(apiServiceMock.get(service.getUsersApiRoute())).once();
  });

  it('should call loadOneUser()', () => {
    when(apiServiceMock.get<UserResponse>(service.getUserApiRoute(userId))).thenReturn(of(USER_STUB));

    service.loadOneUser(userId);

    verify(apiServiceMock.get(service.getUserApiRoute(userId))).once();
  });
});
