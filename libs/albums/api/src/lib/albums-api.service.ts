import { Injectable } from '@angular/core';
import { Observable } from "rxjs";

import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { Album, AlbumsResponse } from "@ziphr-task/albums/common";

@Injectable()
export class AlbumsApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadAlbums(): Observable<Album[]> {
    return this.apiService.get<AlbumsResponse>(this.getAlbumsApiRoute());
  }

  loadOneAlbum(id: string): Observable<Album> {
    return this.apiService.get<Album>(this.getAlbumApiRoute(id));
  }

  getAlbumsApiRoute(): string {
    return this.environmentService.environments.api + '/albums';
  }

  getAlbumApiRoute(id: string): string {
    return this.environmentService.environments.api + `/albums/${id}`;
  }
}
