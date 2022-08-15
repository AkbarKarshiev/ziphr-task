import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Container = 'container',
  Logo = 'logo',
  Menu = 'menu',
  Toggler = 'toggler'
}

export class HeaderComponentPo extends PageObject {
  get container(): DebugElement | null {
    return this.getByAutomationId(Automation.Container);
  }

  get logo(): DebugElement | null {
    return this.getByAutomationId(Automation.Logo);
  }

  get menu(): DebugElement | null {
    return this.getByAutomationId(Automation.Menu);
  }

  get toggler(): DebugElement | null {
    return this.getByAutomationId(Automation.Toggler);
  }

  triggerOffcanvasToggler(): void {
    this.triggerEventHandler(this.toggler, 'click');
  }
}
