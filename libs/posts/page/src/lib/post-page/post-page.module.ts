import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostPageComponent } from './post-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [PostPageComponent],
  exports: [PostPageComponent]
})
export class PostPageModule {}
