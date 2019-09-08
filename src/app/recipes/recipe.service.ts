import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService {

  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    // new Recipe(
    //   'Test name',
    //   'A test description',
    //   'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg',
    //   [
    //     new Ingredient('Meat', 1),
    //     new Ingredient('Buns', 2),
    //     new Ingredient('Cheese', 2)
    //   ]
    // ),
    // new Recipe(
    //   'Another test Recipe',
    //   'Description 2',
    //   'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg',
    //   [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]
    // )
  ];

  constructor(private shopListService: ShoppingListService) { }


  setRecepies(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next([...this.recipes])
  }

  getRecipes() {
    const copyRecepies = [...this.recipes];
    return copyRecepies;
  }

  getRecipe(id: number): Recipe {
    return this.recipes[(id - 1)];
  }

  addIngredientsToShoppingList(ingreients: Ingredient[]) {
    // ingreients.forEach(ingredient => this.shopListService.addIngredient(ingredient));
    this.shopListService.addIngredients(ingreients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesChanged.next([...this.recipes])

  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index - 1] = newRecipe;
    this.recipesChanged.next([...this.recipes])

  }

  deleteRecipe(index: number) {
    this.recipes.splice((index - 1), 1)
    this.recipesChanged.next([...this.recipes])
  }
}
