import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  recepieService: RecepieService;

  constructor(recepServ: RecepieService, private myRouter: Router, private activeRoute: ActivatedRoute) {
    this.recepieService = recepServ;
  }

  ngOnInit() {
    this.recipes = this.recepieService.getRecipes();
  }

  onNewRecipe() {
    this.myRouter.navigate(['new'], {relativeTo: this.activeRoute})
  }
}
