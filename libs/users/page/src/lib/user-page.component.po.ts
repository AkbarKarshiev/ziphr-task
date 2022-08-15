import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Albums = 'albums',
  Posts = 'posts',
}

export class UserPageComponentPo extends PageObject {
  get albums(): DebugElement | null {
    return this.getByAutomationId(Automation.Albums);
  }

  get posts(): DebugElement | null {
    return this.getByAutomationId(Automation.Posts);
  }
}
