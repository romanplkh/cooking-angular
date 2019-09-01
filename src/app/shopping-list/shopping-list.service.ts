import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();

  ingredientEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 25)
  ];

  getIngredients() {
    return [...this.ingredients];
  }

  getIngredient(index: number): Ingredient {
    return this.ingredients[index];
  }

  addIngredient(ingredient: Ingredient) {
    const idxItem = this.ingredients.findIndex(ing => ing.name == ingredient.name);
    if (idxItem > -1) {
      this.ingredients[idxItem].amount += ingredient.amount;
    } else {
      this.ingredients.push(new Ingredient(ingredient.name, ingredient.amount))
    }
  }


  addIngredients(ingredients: Ingredient[]) {
    ingredients.forEach(this.addIngredient.bind(this));
    this.ingredientsChanged.next([...this.ingredients]);
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients.splice(index, 1, newIngredient);
    this.ingredientsChanged.next([...this.ingredients]);
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next([...this.ingredients]);
  }
}
