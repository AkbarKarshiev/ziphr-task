import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Link = 'link',
  Brand = 'brand',
}

export class LogoComponentPo extends PageObject {
  get link(): DebugElement | null {
    return this.getByAutomationId(Automation.Link);
  }

  get brand(): DebugElement | null {
    return this.getByAutomationId(Automation.Brand);
  }

  get brandText(): string | null {
    return this.text(Automation.Brand);
  }
}
