import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BreadcrumbModule } from "@ziphr-task/ui/breadcrumb";

import { PostPageComponent } from './post-page.component';

@NgModule({
  imports: [CommonModule, BreadcrumbModule],
  declarations: [PostPageComponent],
  exports: [PostPageComponent]
})
export class PostPageModule {}
