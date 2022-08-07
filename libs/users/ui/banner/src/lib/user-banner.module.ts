import { NgModule } from '@angular/core';

import { UserBannerComponent } from './user-banner.component';
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [UserBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [UserBannerComponent]
})
export class UserBannerModule {}
