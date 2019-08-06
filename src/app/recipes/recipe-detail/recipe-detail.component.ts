import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  constructor(
    private recipeService: RecepieService,
    private activeRoute: ActivatedRoute, private myRouter: Router
  ) {}

  recipeDetails: Recipe;
  id: number;

  onAddToShoppingList() {
    this.recipeService.addIngredientsToShoppingList(
      this.recipeDetails.ingredients
    );
  }

  ngOnInit() {
    this.activeRoute.params.subscribe((param: Params) => {
      this.id = +param.id;
      this.recipeDetails = this.recipeService.getRecipe(this.id);
    });
  }

  onEditRecipe() {
    this.myRouter.navigate(['../', this.id, 'edit'], {relativeTo: this.activeRoute})
  }
}
