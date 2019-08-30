import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecepieService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];

  recepieService: RecepieService;
  subsr: Subscription;

  constructor(recepServ: RecepieService, private myRouter: Router, private activeRoute: ActivatedRoute) {
    this.recepieService = recepServ;
  }

  ngOnInit() {
    this.subsr = this.recepieService.recipesChanged.subscribe({
      next: (recipes: Recipe[]) => this.recipes = recipes
    })

    this.recipes = this.recepieService.getRecipes()
  }

  onNewRecipe() {
    this.myRouter.navigate(['new'], { relativeTo: this.activeRoute })
  }

  ngOnDestroy() {
    this.subsr.unsubscribe()
  }
}
