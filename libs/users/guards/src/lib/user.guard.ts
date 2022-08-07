import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';

import { NavigationService } from "@ziphr-task/core/navigation/service";
import { UsersApiService } from "@ziphr-task/users/api";

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  private readonly redirectTree = this.navigationService.createUrlTree(this.navigationService.getPaths().dashboard);

  constructor(private readonly navigationService: NavigationService, private readonly userApiService: UsersApiService) {
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> {
    const { id } = route.params;

    if (!id) {
      return of(this.redirectTree);
    }

    return this.userApiService.loadOneUser(id).pipe(map((user) => {
      return Object.keys(user).length > 0 || this.redirectTree
    }));
  }
}
