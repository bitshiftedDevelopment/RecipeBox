import { Input } from '@angular/core';

export class Recipe {
  @Input() title: string;
  @Input() author: string;
  @Input() ingredients: [string];
  @Input() utensils: [string];
  @Input() steps: [string];
  @Input() effort: string;
  @Input() prepTime: string;
  @Input() cookTime: string;
}
