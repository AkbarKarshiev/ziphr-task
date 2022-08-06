import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

import { NavigationService } from "@ziphr-task/core/navigation/service";
import { PhotosFacade } from "@ziphr-task/photos/state";

@Injectable()
export class PhotoGuard implements CanActivate {
  private readonly redirectTree = this.navigationService.createUrlTree(this.navigationService.getPaths().dashboard);

  constructor(private readonly navigationService: NavigationService, private readonly photosFacade: PhotosFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { id } = route.params;

    if (!id) {
      return of(this.redirectTree);
    }

    return this.photosFacade.photoByIdLoaded$(id).pipe(map((photo) => !!photo || this.redirectTree));
  }
}
