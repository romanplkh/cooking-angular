import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  constructor(private recipeService: RecepieService) { }
  
  @Input() recipeDetails: Recipe;

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(this.recipeDetails.ingredients)
  }

  ngOnInit() {}
}
