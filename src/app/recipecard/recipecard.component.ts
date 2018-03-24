import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe';
@Component({
  selector: 'recipecard',
  templateUrl: './recipecard.component.html',
  styleUrls: ['./recipecard.component.scss']
})
export class RecipecardComponent implements OnInit {
  @Input() recipe: Recipe;
  step = 0;
  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
