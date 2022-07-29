import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbActiveOffcanvas } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'ziphr-task-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidenavComponent {
  constructor(public readonly activeOffcanvas: NgbActiveOffcanvas) {}
}
