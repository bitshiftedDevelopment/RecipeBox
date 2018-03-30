import { Component, OnInit, Input } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Recipe, Ingredient } from '../recipe.interface';

interface model {
  value: Recipe;
}

@Component({
  moduleId: module.id,
  selector: 'recipe-input-form',
  templateUrl: './recipe-input-form.component.html',
  styleUrls: ['./recipe-input-form.component.scss']
})

export class RecipeInputFormComponent implements OnInit {
  recipesCol: AngularFirestoreCollection<Recipe>;
  recipes: Observable<Recipe[]>;
  // @Input() title: string;
  // @Input() author: string;
  // @Input() url: string;
  // @Input() rating: number;
  // @Input() effort: number;
  // @Input() prepTime: number;
  // @Input() cookTime: number;
  // @Input() utensils: [string];
  // @Input() ingredients: [Ingredient];
  // @Input() steps: [string];
  public myForm: FormGroup;

  constructor(private fb: FormBuilder, private afs: AngularFirestore) { }

  ngOnInit() {
    // we initialize the connection to firestore here
    this.recipesCol = this.afs.collection('recipes');
    this.recipes = this.recipesCol.valueChanges();
    // we will initialize our form here
    this.myForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(5)]],
      author: ['', [Validators.required]],
      url: ['', [Validators.minLength(7)]],
      rating: [''],
      effort: [''],
      prepTime: [''],
      cookTime: [''],
      utensils: this.fb.array([
        this.initUtensil(),
      ]),
      ingredients: this.fb.array([
        this.initIngredient(),
      ]),
      steps: this.fb.array([
        this.initStep(),
      ])
    });
  }

  save(model: Recipe) {
    // call API to save recipe
    //console.log(model);
    this.afs.collection('recipes').add(model.value);
    //this.afs.collection('posts').add({'title': this.title, 'content': this.content});
  }

  // EXAMPLE - REMOVE ME
  initAddress() {
    // initialize our utensil
    return this.fb.group({
      street: ['', Validators.required],
      postcode: ['']
    });
  }

  initUtensil() {
    // initialize our utensil
    return this.fb.group({
      name: ['', Validators.required]
    });
  }
  addUtensil() {
    // add utensil to the list
    const control = <FormArray>this.myForm.controls['utensils'];
    control.push(this.initUtensil());
  }
  removeUtensil(i: number) {
    // remove utensil from the list
    const control = <FormArray>this.myForm.controls['utensils'];
    control.removeAt(i);
  }

  initIngredient() {
    // initialize our utensil
    return this.fb.group({
      name: ['', Validators.required],
      amount: ['', Validators.required],
      measurement: ['', Validators.required]
    });
  }
  addIngredient() {
    // add utensil to the list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.push(this.initIngredient());
  }
  removeIngredient(i: number) {
    // remove utensil from the list
    const control = <FormArray>this.myForm.controls['ingredients'];
    control.removeAt(i);
  }

  initStep() {
    // initialize our utensil
    return this.fb.group({
      instructions: ['', Validators.required]
    });
  }
  addStep() {
    // add utensil to the list
    const control = <FormArray>this.myForm.controls['steps'];
    control.push(this.initStep());
  }
  removeStep(i: number) {
    // remove utensil from the list
    const control = <FormArray>this.myForm.controls['steps'];
    control.removeAt(i);
  }




}
