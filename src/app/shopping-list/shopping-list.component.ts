import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  constructor(private shopListService: ShoppingListService) {}
  ingredients: Ingredient[] = [];
  private subscriptionSubject: Subscription;

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.unshift(ingredient);
  }

  ngOnInit() {
    this.ingredients = this.shopListService.getIngredients();
    this.subscriptionSubject = this.shopListService.ingredientsChanged.subscribe(
      {
        next: (ingredients: Ingredient[]) => (this.ingredients = ingredients)
      }
    );
  }

  onEditItem(index:number) {
    this.shopListService.ingredientEditing.next(index);
  }

  // Beacause we created our own custom subscription, we need to unsubscribre manually
  ngOnDestroy() {
    this.subscriptionSubject.unsubscribe();
  }
}
