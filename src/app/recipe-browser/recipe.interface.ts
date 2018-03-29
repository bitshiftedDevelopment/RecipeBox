
export interface Recipe {
  title: string; // name of the dish
  author: string; // creator of the recipe
  url: string; // originating site the recipe came from
  rating: number; // quality of recipe in personal opinion (needs to be per user)
  effort: number; // difficulty of recipe on scale of 1-10
  prepTime: number; // time needed to prep
  cookTime: number; // active time cooking
  utensils: [string]; // pots, pans, whisk, etc
  ingredients: [Ingredient]; // list of ingredients
  steps: [string];
}

export interface Ingredient {
  name: string; // name of the ingredient
  amount: number; // number of measurement units needed
  measurement: string; // cups, teaspoons, etc
}
