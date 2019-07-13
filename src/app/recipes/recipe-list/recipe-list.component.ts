import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test name',
      'A test description',
      'https://cdn.pixabay.com/photo/2019/01/29/18/05/burger-3962997_960_720.jpg'
    ),
    new Recipe(
      'Another test Recipe',
      'Description 2',
      'https://cdn.pixabay.com/photo/2016/01/22/02/13/meat-1155132_960_720.jpg'
    )
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipeItem: Recipe) {
    this.recipeWasSelected.emit(recipeItem);
  }
}
