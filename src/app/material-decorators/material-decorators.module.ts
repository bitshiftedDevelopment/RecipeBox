import { NgModule } from '@angular/core';
import { StarRatingModule } from './star-rating/star-rating.module';

@NgModule({
  imports: [
    StarRatingModule
  ],
  exports: [
    StarRatingModule
  ]
})
export class MaterialDecoratorsModule { }
