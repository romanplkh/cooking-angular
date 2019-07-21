import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import {} from 'protractor';
import { RecepieService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  recipeService: RecepieService;

  constructor(resServ: RecepieService) {
    this.recipeService = resServ;
  }

  onSelectedItem() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  ngOnInit() {}
}
