import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, takeUntil } from "rxjs";

import { RootStateFacade } from "@ziphr-task/core/store/root";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { UsersApiService } from "@ziphr-task/users/api";
import { User } from "@ziphr-task/users/common";

@Component({
  selector: 'ziphr-task-user-banner',
  templateUrl: './user-banner.component.html',
  styleUrls: ['./user-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class UserBannerComponent implements OnInit {
  user$!: Observable<Partial<User>>;

  constructor(
    private readonly usersApiService: UsersApiService,
    private readonly rootRouterState: RootStateFacade,
    private readonly destroy$: DestroyService
  ) {}

  ngOnInit(): void {
    this.rootRouterState.currentRouteState$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      this.user$ = this.usersApiService.loadOneUser(params.params['id']);
    });
  }
}
