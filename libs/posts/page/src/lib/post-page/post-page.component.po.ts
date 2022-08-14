import { DebugElement } from "@angular/core";

import { PageObject } from "@ziphr-task/core/testing";

enum Automation {
  Breadcrumb = 'breadcrumb',
  Body = 'body',
  Title = 'title',
}

export class PostPageComponentPo extends PageObject {
  get breadcrumb(): DebugElement | null {
    return this.getByAutomationId(Automation.Breadcrumb);
  }

  get body(): DebugElement | null {
    return this.getByAutomationId(Automation.Body);
  }

  get title(): DebugElement | null {
    return this.getByAutomationId(Automation.Title);
  }
}
