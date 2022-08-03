import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RootStateFacade } from "@ziphr-task/core/store/root";

@Component({
  selector: 'ziphr-task-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BreadcrumbComponent implements OnInit {
  constructor(private readonly rootStateFacade: RootStateFacade) {}

  ngOnInit(): void {
    this.rootStateFacade.currentRouteState$.subscribe((state) => {
      console.log(state);
    })
  }
}
