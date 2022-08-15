import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Item = 'item',
}

export class VerticalAlbumsListComponentPo extends PageObject {
  get items(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Item);
  }
}
