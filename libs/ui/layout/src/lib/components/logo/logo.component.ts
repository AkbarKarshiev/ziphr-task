import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';

import { EnvironmentService } from "@ziphr-task/core/environments/service";
import { NavigationPaths, PATHS } from "@ziphr-task/core/navigation/common";

@Component({
  selector: 'ziphr-task-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoComponent implements OnInit {
  brand!: string;

  constructor(private readonly environmentService: EnvironmentService, @Inject(PATHS) public readonly paths: NavigationPaths) {}

  ngOnInit(): void {
    this.brand = this.environmentService.environments.brand;
  }
}
