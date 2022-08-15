import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  NavItem = 'nav-item',
}

export class MenuComponentPo extends PageObject {
  get navLinks(): DebugElement[] {
    return this.getAllByAutomationId(Automation.NavItem);
  }
}
