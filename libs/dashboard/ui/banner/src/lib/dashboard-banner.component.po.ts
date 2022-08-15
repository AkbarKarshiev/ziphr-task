import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Brand = 'brand',
}

export class DashboardBannerComponentPo extends PageObject {
  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get brandText(): string | null {
    return this.text(Automation.Brand);
  }
}
