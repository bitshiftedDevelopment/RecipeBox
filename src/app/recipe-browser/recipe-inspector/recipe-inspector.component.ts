import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'recipe-inspector',
  templateUrl: './recipe-inspector.component.html',
  styleUrls: ['./recipe-inspector.component.scss']
})
export class RecipeInspectorComponent implements OnInit {
  @Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
