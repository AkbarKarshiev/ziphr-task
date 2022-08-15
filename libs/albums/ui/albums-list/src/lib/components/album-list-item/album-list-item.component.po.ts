import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  TitleLink = 'title-link',
  Photo = 'photo',
  UserLink = 'user-link',
}

export class AlbumsListComponentPo extends PageObject {
  get titleLink(): DebugElement | null {
    return this.getByAutomationId(Automation.TitleLink);
  }

  get userLink(): DebugElement | null {
    return this.getByAutomationId(Automation.UserLink);
  }

  get photos(): DebugElement[] {
    return this.getAllByAutomationId(Automation.Photo);
  }
}
