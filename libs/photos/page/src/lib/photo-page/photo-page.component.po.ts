import { DebugElement } from "@angular/core";

import { PageObject } from "@ziphr-task/core/testing";

enum Automation {
  Breadcrumb = 'breadcrumb',
  Image = 'image',
  Title = 'title',
}

export class PhotoPageComponentPo extends PageObject {
  get breadcrumb(): DebugElement | null {
    return this.getByAutomationId(Automation.Breadcrumb);
  }

  get image(): DebugElement | null {
    return this.getByAutomationId(Automation.Image);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }
}
