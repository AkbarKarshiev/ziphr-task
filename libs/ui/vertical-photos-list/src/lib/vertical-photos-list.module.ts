import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerticalPhotosListItemModule } from "./components/vertical-photos-list-item/vertical-photos-list-item.module";

import { VerticalPhotosListComponent } from './vertical-photos-list.component';

@NgModule({
  imports: [CommonModule, VerticalPhotosListItemModule],
  declarations: [VerticalPhotosListComponent],
  exports: [VerticalPhotosListItemModule, VerticalPhotosListComponent]
})
export class VerticalPhotosListModule {}
