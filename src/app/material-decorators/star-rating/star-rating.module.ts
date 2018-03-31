import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StarRatingComponent
  ],
  declarations: [StarRatingComponent]
})
export class StarRatingModule { }
