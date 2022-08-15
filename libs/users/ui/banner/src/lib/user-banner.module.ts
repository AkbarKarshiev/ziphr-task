import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { UserBannerComponent } from './user-banner.component';

@NgModule({
  declarations: [UserBannerComponent],
  imports: [CommonModule],
  exports: [UserBannerComponent]
})
export class UserBannerModule {}
