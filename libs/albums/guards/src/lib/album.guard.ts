import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

import { AlbumsFacade } from "@ziphr-task/albums/state";
import { NavigationService } from "@ziphr-task/core/navigation/service";

@Injectable()
export class AlbumGuard implements CanActivate {
  private readonly redirectTree = this.navigationService.createUrlTree(this.navigationService.getPaths().dashboard);

  constructor(private readonly navigationService: NavigationService, private readonly albumsFacade: AlbumsFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { id } = route.params;

    if (!id) {
      return of(this.redirectTree);
    }

    return this.albumsFacade.albumByIdLoaded$(id).pipe(map((album) => !!album || this.redirectTree));
  }
}
