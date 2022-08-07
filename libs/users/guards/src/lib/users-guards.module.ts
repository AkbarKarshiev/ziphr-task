import { NgModule } from '@angular/core';

import { UserGuard } from "./user.guard";

@NgModule({
  providers: [UserGuard],
})
export class UsersGuardsModule {}
