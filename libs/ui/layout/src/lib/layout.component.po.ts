import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  TabletHandset = 'tablet-handset',
  Web = 'web',
}

export class LayoutComponentPo extends PageObject {
  get tabletHandset(): DebugElement | null {
    return this.getByAutomationId(Automation.TabletHandset);
  }

  get web(): DebugElement | null {
    return this.getByAutomationId(Automation.Web);
  }
}
