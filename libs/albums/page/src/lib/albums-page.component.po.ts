import { DebugElement } from "@angular/core";

import { PageObject } from "@ziphr-task/core/testing";

enum Automation {
  Breadcrumb = 'breadcrumb',
  Table = 'table',
}

export class AlbumsPageComponentPo extends PageObject {
  get breadcrumb(): DebugElement | null {
    return this.getByAutomationId(Automation.Breadcrumb);
  }

  get table(): DebugElement | null {
    return this.getByAutomationId(Automation.Table);
  }
}
