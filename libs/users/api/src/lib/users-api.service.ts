import { Injectable } from '@angular/core';
import { catchError, Observable, of } from "rxjs";

import { ApiService } from "@ziphr-task/core/api/service";
import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { User, UsersResponse } from "@ziphr-task/users/common";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  constructor(private readonly apiService: ApiService, private readonly environmentService: EnvironmentService) { }

  loadUsers(): Observable<UsersResponse> {
    return this.apiService.get<UsersResponse>(this.getUsersApiRoute());
  }

  loadOneUser(id: string): Observable<Partial<User>> {
    return this.apiService.get<User>(this.getUserApiRoute(id)).pipe(
      catchError(() => {
        return of({});
      })
    );
  }

  getUsersApiRoute(): string {
    return this.environmentService.environments.api + '/users';
  }

  getUserApiRoute(id: string): string {
    return this.environmentService.environments.api + `/users/${id}`;
  }
}
