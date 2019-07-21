import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 25)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients = [...this.ingredients, ingredient];

    // To display back that array of ingredietns changed we emit event with updated array
    this.ingredientsChanged.emit([...this.ingredients]);
  }

  ingredientIndex(ingredients: Ingredient[], ingr: Ingredient) {
    return ingredients.findIndex(ingredient => ingredient.name === ingr.name);
  }

  addIngredients(ingredients: Ingredient[]) {
    const copyStateIngredients = [...this.ingredients];

    ingredients.forEach(ingred => {
      const ingIdx = this.ingredientIndex(copyStateIngredients, ingred);

      ingIdx >= 0
        ? (copyStateIngredients[ingIdx].amount += ingred.amount)
        : copyStateIngredients.push(ingred);
    });

    this.ingredients = copyStateIngredients;

    this.ingredientsChanged.emit([...this.ingredients]);
  }
}
