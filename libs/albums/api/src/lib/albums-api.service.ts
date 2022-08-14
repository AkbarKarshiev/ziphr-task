import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { AlbumResponse, AlbumsResponse } from "@ziphr-task/albums/common";
import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";

@Injectable()
export class AlbumsApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadAlbums(): Observable<AlbumsResponse> {
    return this.apiService.get<AlbumsResponse>(this.getAlbumsApiRoute());
  }

  loadOneAlbum(id: string): Observable<AlbumResponse> {
    return this.apiService.get<AlbumResponse>(this.getAlbumApiRoute(id));
  }

  getAlbumsApiRoute(): string {
    return this.environmentService.environments.api + '/albums';
  }

  getAlbumApiRoute(id: string): string {
    return this.environmentService.environments.api + `/albums/${id}`;
  }
}
