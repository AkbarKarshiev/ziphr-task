import { DebugElement } from '@angular/core';

import { PageObject } from '@ziphr-task/core/testing';

enum Automation {
  Photo = 'photo-img',
  Body = 'body',
  Title = 'title',
  Album = 'album',
}

export class CardPhotosListItemComponentPo extends PageObject {
  get photo(): DebugElement | null {
    return this.getByAutomationId(Automation.Photo);
  }

  get body(): DebugElement | null {
    return this.getByAutomationId(Automation.Body);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }

  get album(): DebugElement | null {
    return this.getByAutomationId(Automation.Album);
  }

  get photoSrcValue(): string | null {
    return this.photo?.attributes['src'] ?? null;
  }
}
