import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Photo = 'photo',
  Link = 'link',
  Title = 'title',
}

export class VerticalPhotosListItemComponentPo extends PageObject {
  get photo(): DebugElement | null {
    return this.getByAutomationId(Automation.Photo);
  }

  get link(): DebugElement | null {
    return this.getByAutomationId(Automation.Link);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }

  get photoSrcValue(): string | null {
    return this.photo?.attributes['src'] ?? null;
  }
}
