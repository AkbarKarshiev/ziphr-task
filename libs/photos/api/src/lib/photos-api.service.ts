import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { PhotoResponse, PhotosResponse } from "@ziphr-task/photos/common";

@Injectable()
export class PhotosApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadPhotos(): Observable<PhotosResponse> {
    return this.apiService.get<PhotosResponse>(this.getPhotosApiRoute());
  }

  loadOnePhoto(id: string): Observable<PhotoResponse> {
    return this.apiService.get<PhotoResponse>(this.getPhotoApiRoute(id));
  }

  getPhotosApiRoute(): string {
    return this.environmentService.environments.api + '/photos';
  }

  getPhotoApiRoute(id: string): string {
    return this.environmentService.environments.api + `/photos/${id}`;
  }
}
