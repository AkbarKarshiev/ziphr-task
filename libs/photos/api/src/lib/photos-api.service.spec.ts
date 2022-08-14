import { of } from "rxjs";
import { instance, mock, verify, when } from "ts-mockito";

import { ApiService } from "@ziphr-task/core/api/service";
import { ENVIRONMENTS_DEFAULT, EnvironmentService } from "@ziphr-task/core/environments/service";
import { PHOTO_STUB, PhotoResponse, PHOTOS_RESPONSE_STUB, PhotosResponse } from "@ziphr-task/photos/common";

import { PhotosApiService } from './photos-api.service';

describe('PhotosApiService', () => {
  let service: PhotosApiService;
  let apiServiceMock: ApiService;
  let environmentServiceMock: EnvironmentService;
  const photoId = '1';

  beforeEach(() => {
    apiServiceMock = mock(ApiService);
    environmentServiceMock = mock(environmentServiceMock);
    when(environmentServiceMock.environments).thenReturn(ENVIRONMENTS_DEFAULT);

    service = new PhotosApiService(instance(apiServiceMock), instance(environmentServiceMock));
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should call loadPhotos()', () => {
    when(apiServiceMock.get<PhotosResponse>(service.getPhotosApiRoute())).thenReturn(of(PHOTOS_RESPONSE_STUB));

    service.loadPhotos();

    verify(apiServiceMock.get(service.getPhotosApiRoute())).once();
  });

  it('should call loadOnePhoto()', () => {
    when(apiServiceMock.get<PhotoResponse>(service.getPhotoApiRoute(photoId))).thenReturn(of(PHOTO_STUB));

    service.loadOnePhoto(photoId);

    verify(apiServiceMock.get(service.getPhotoApiRoute(photoId))).once();
  });
});
