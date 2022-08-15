import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Row = 'row',
  Item = 'item',
}

export class VerticalPhotosListComponentPo extends PageObject {
  get row(): DebugElement | null {
    return this.getByAutomationId(Automation.Row);
  }

  get item(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Item);
  }
}
