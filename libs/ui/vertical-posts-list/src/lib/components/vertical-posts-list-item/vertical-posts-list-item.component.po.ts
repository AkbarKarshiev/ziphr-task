import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Title = 'title',
  Body = 'body',
}

export class VerticalPostsListItemComponentPo extends PageObject {
  get body(): DebugElement | null {
    return this.getByAutomationId(Automation.Body);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }
}
