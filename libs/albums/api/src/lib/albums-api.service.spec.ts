import { of } from "rxjs";
import { instance, mock, verify, when } from "ts-mockito";

import {
  ALBUM_STUB,
  AlbumResponse,
  ALBUMS_RESPONSE_STUB,
  AlbumsResponse
} from "@ziphr-task/albums/common";
import { ApiService } from "@ziphr-task/core/api/service";
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from "@ziphr-task/core/environments/service";

import { AlbumsApiService } from './albums-api.service';

describe('AlbumsApiService', () => {
  let service: AlbumsApiService;
  let apiServiceMock: ApiService;
  let environmentServiceMock: EnvironmentService;
  const albumId = '1';

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    environmentServiceMock = mock(environmentServiceMock);
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);

    service = new AlbumsApiService(instance(apiServiceMock), instance(environmentServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadAlbums()', () => {
    when(apiServiceMock.get<AlbumsResponse>(service.getAlbumsApiRoute())).thenReturn(of(ALBUMS_RESPONSE_STUB));

    service.loadAlbums();

    verify(apiServiceMock.get(service.getAlbumsApiRoute())).once();
  });

  it('should call loadOneAlbum()', () => {
    when(apiServiceMock.get<AlbumResponse>(service.getAlbumApiRoute(albumId))).thenReturn(of(ALBUM_STUB));

    service.loadOneAlbum(albumId);

    verify(apiServiceMock.get(service.getAlbumApiRoute(albumId))).once();
  });
});
