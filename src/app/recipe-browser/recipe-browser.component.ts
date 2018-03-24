import { Component, OnInit } from '@angular/core';
//import * as mockdata from './demorecipe.json';

const mockdata = {
  "title": "Egg Drop Soup",
  "author": "Mick Evans",
  "url": "null",
  "rating": 5,
  "effort": 1,
  "prepTime": 5,
  "cookTime": 5,
  "utensils": [
    "pot",
    "whisk",
    "fork",
    "bowl",
    "cup"
  ],
  "ingredients": [{
    "name": "Water",
    "amount": "2",
    "measurement": "cups"
  },
  {
    "name": "Chicken stock",
    "amount": "2",
    "measurement": "packets"
  },
  {
    "name": "Soya sauce",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "name": "Sesame oil",
    "amount": "2",
    "measurement": "teaspoon"
  },
  {
    "name": "Corn starch",
    "amount": "1.5",
    "measurement": "tablespoons"
  },
  {
    "name": "Egg",
    "amount": "1",
    "measurement": "beaten"
  },
  {
    "name": "Green onion",
    "amount": "1",
    "measurement": "sprig"
  },
  {
    "name": "Salt",
    "amount": "1",
    "measurement": "teaspoon"
  },
  {
    "name": "Pepper",
    "amount": "1",
    "measurement": "teaspoon"
  }
  ],
  "steps": [
    "Bring water to a boil",
    "While waiting for water to boil, thoroughly beat egg and chop green onion. Set aside",
    "Whisk in chicken boullion, soya sauce, and sesame oil",
    "Reduce heat to medium-low",
    "Mix corn starch with 2 tablespoons of water",
    "Stir one quarter of the corn starch mixture into the egg",
    "Whisk remaining corn starch in broth and boil one minute",
    "Strain egg through tines of fork into stock while whisking gently",
    "Turn heat off while leaving pot on burner for one minute",
    "Pour soup into bowl and top with salt, pepper, and green onions"
  ]
}

@Component({
  selector: 'recipe-browser',
  templateUrl: './recipe-browser.component.html',
  styleUrls: ['./recipe-browser.component.scss']
})
export class RecipeBrowserComponent implements OnInit {
  data = mockdata;
  constructor() { }

  ngOnInit() {
  }
}
