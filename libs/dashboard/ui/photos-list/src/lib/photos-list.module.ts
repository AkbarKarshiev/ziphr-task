import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotosListComponent } from './photos-list.component';
import { PhotosListItemModule } from "./components/photos-list-item/photos-list-item.module";

@NgModule({
  imports: [CommonModule, PhotosListItemModule],
  declarations: [PhotosListComponent],
  exports: [PhotosListComponent]
})
export class PhotosListModule {}
