import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbOffcanvas } from "@ng-bootstrap/ng-bootstrap";

import { SidenavComponent } from "../sidenav/sidenav.component";

@Component({
  selector: 'ziphr-task-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent {
  constructor(private readonly offcanvasService: NgbOffcanvas) {}

  openSideNav(): void {
    this.offcanvasService.open(SidenavComponent);
  }
}
