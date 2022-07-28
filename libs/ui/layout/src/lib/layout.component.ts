import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Breakpoints } from "@angular/cdk/layout";

import { LayoutService } from "@ziphr-task/core/layout";

@Component({
  selector: 'ziphr-task-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LayoutComponent implements OnInit {
  readonly breakpoints = Breakpoints;

  layoutTypes$!: Observable<string>

  constructor(private readonly layoutService: LayoutService) {}

  ngOnInit(): void {
    this.layoutTypes$ = this.layoutService.layoutType$;
  }
}
