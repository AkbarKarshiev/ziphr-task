import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PostPageComponent } from './post-page.component';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [PostPageComponent],
  exports: [PostPageComponent]
})
export class PostPageModule {}
