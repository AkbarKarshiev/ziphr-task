import { NgModule } from '@angular/core';

import { NavigationPathPipe } from './navigation-path.pipe';

@NgModule({
  declarations: [NavigationPathPipe],
  exports: [NavigationPathPipe]
})
export class NavigationPipesModule {}
