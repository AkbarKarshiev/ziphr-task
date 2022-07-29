import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { EnvironmentService } from "@ziphr-task/core/environments/service";

@Component({
  selector: 'ziphr-task-dashboard-banner',
  templateUrl: './dashboard-banner.component.html',
  styleUrls: ['./dashboard-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardBannerComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
