import { NgModule } from '@angular/core';

import { CardComponent } from './card.component';
import { CardHeaderModule } from "./components/card-header/card-header.module";
import { CardBodyModule } from "./components/card-body/card-body.module";
import { CardFooterModule } from "./components/card-footer/card-footer.module";
import { CardHeaderComponent } from "./components/card-header/card-header.component";
import { CardBodyComponent } from "./components/card-body/card-body.component";
import { CardFooterComponent } from "./components/card-footer/card-footer.component";

@NgModule({
  imports: [
    CardHeaderModule,
    CardBodyModule,
    CardFooterModule
  ],
  declarations: [CardComponent],
  exports: [
    CardComponent,
    CardHeaderComponent,
    CardBodyComponent,
    CardFooterComponent
  ]
})
export class CardModule {}
