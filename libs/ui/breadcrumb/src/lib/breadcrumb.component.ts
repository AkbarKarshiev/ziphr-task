import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { map, Observable } from "rxjs";

import { RootStateFacade } from "@ziphr-task/core/store/root";
import { RouterReducerStateExtended } from "@ziphr-task/core/store/root";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {
  routesArr$!: Observable<string[]>;

  constructor(
    private readonly rootStateFacade: RootStateFacade,
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    this.routesArr$ = this.rootStateFacade.currentRouteState$.pipe(
      isNotNullOrUndefined(),
      map((state: RouterReducerStateExtended) => {
        const urlArr = state.url.split('/');
        urlArr.shift();
        return urlArr;
      })
    )
  }
}
