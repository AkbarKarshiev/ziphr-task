import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

import { NavigationService } from "@ziphr-task/core/navigation/service";
import { PostsFacade } from "@ziphr-task/posts/state";

@Injectable()
export class PostGuard implements CanActivate {
  private readonly redirectTree = this.navigationService.createUrlTree(this.navigationService.getPaths().dashboard);

  constructor(private readonly navigationService: NavigationService, private readonly postsFacade: PostsFacade) {}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { id } = route.params;

    if (!id) {
      return of(this.redirectTree);
    }

    return this.postsFacade.postByIdLoaded$(id).pipe(map((post) => !!post || this.redirectTree));
  }
}
