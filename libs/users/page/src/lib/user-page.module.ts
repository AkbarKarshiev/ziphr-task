import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from "@ziphr-task/ui/card";
import { VerticalPostsListModule } from "@ziphr-task/ui/vertical-posts-list";
import { VerticalAlbumsListModule } from "@ziphr-task/ui/vertical-albums-list";

import { UserPageRoutingModule } from "./user-page-routing.module";

import { UserPageComponent } from './user-page.component';

@NgModule({
  imports: [CommonModule, UserPageRoutingModule, CardModule, VerticalPostsListModule, VerticalAlbumsListModule],
  declarations: [UserPageComponent],
})
export class UserPageModule {}
