import { Input } from '@angular/core';

export class Ingredient {
  @Input() name: string;
  @Input() amount: number;
  @Input() measurement: string;
}
