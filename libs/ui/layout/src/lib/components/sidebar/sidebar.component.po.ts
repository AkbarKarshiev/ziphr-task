import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Logo = 'logo',
  Menu = 'menu',
}

export class SidebarComponentPo extends PageObject {
  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get menu(): DebugElement | null {
    return this.getByAutomationId(Automation.Menu);
  }
}
