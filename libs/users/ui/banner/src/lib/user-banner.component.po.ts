import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Name = 'name',
  Details = 'details',
}

export class UserBannerComponentPo extends PageObject {
  get name(): DebugElement | null {
    return this.getByAutomationId(Automation.Name);
  }

  get details(): DebugElement | null {
    return this.getByAutomationId(Automation.Details);
  }
}
