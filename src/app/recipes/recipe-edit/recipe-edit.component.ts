import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecepieService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(
    private activeRoute: ActivatedRoute,
    private recipeService: RecepieService
  ) { }

  ngOnInit() {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = +params.id;
      this.editMode = params.id != null;
      this.initForm();
    });
  }

  private initForm() {
    // WHAT VALUES TO STORE IN FORM
    const recipe: Recipe = {
      name: '',
      imagePath: '',
      description: '',
      ingredients: []
    };

    const ingredientsArrayForm = new FormArray([]);

    // GET VALUES
    if (this.editMode) {
      const recipeEdited = this.recipeService.getRecipe(this.id);
      Object.assign(recipe, recipeEdited);

      if (recipe.ingredients) {
        for (const ingredient of recipe.ingredients) {
          // Push group for 2 controls: name and amount
          ingredientsArrayForm.push(
            new FormGroup({
              name: new FormControl(ingredient.name),
              amount: new FormControl(ingredient.amount)
            })
          );
        }
      }
    }



    // SET FORM WITH VALUES
    this.recipeForm = new FormGroup({
      name: new FormControl(recipe.name, Validators.required),
      imagePath: new FormControl(recipe.imagePath, Validators.required),
      description: new FormControl(recipe.description, Validators.required),
      ingredients: ingredientsArrayForm
    });
  }

  onSubmit() {
    console.log(this.recipeForm);
  }

  onAddIngredient() {
    //Cast to FormArray and add new input lines to form
    (<FormArray>this.recipeForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(),
      amount: new FormControl()
    }))
  }
}
