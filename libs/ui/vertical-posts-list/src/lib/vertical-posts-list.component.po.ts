import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Item = 'item',
}

export class VerticalPostsListComponentPo extends PageObject {
  get item(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Item);
  }
}
