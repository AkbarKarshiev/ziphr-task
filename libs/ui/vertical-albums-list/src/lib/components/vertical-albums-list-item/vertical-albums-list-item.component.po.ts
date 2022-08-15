import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Title = 'title',
}

export class VerticalAlbumsListItemComponentPo extends PageObject {
  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }
}
