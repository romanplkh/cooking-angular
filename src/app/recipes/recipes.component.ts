import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecepieService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: []
})
export class RecipesComponent implements OnInit {
  selectedRecipe: Recipe;

  constructor(private recipeService: RecepieService) {}

  ngOnInit() {
    // Subsribe to event and select recipe
    
  }

  onRecipeSelected(recipeItem: Recipe) {
    this.selectedRecipe = recipeItem;
  }
}
