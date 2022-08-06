import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { Observable, takeUntil } from "rxjs";

import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";
import { RootStateFacade } from "@ziphr-task/core/store/root";
import { DestroyService } from "@ziphr-task/core/utils/destroy";
import { isNotNullOrUndefined } from "@ziphr-task/core/utils/operators";
import { Photo } from "@ziphr-task/photos/common";
import { PhotosFacade } from "@ziphr-task/photos/state";

@Component({
  selector: 'ziphr-task-photo-page',
  templateUrl: './photo-page.component.html',
  styleUrls: ['./photo-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class PhotoPageComponent implements OnInit {
  photo$!: Observable<Photo>;

  constructor(
    private readonly rootStateFacade: RootStateFacade,
    private readonly photosFacade: PhotosFacade,
    private readonly destroy$: DestroyService,
    @Inject(PATHS) public readonly paths: NavigationPaths
  ) {}

  ngOnInit(): void {
    this.rootStateFacade.routeParams$.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params) => {
      const { id } = params;
      this.photo$ = this.photosFacade.photoById$(id).pipe(isNotNullOrUndefined());
    });
  }
}
