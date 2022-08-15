import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Logo = 'logo',
  Menu = 'menu',
  Dismiss = 'dismiss',
}

export class SidenavComponentPo extends PageObject {
  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get menu(): DebugElement | null {
    return this.getByAutomationId(Automation.Menu);
  }

  get dismiss(): DebugElement | null {
    return this.getByAutomationId(Automation.Dismiss);
  }

  triggerDismiss(): void {
    this.triggerEventHandler(this.dismiss, 'click');
  }
}
