import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecepieService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';
import { Response } from 'selenium-webdriver/http';

@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(
    private http: HttpClient,
    private recipeService: RecepieService
  ) { }

  saveRecipes() {
    //returns observable
    return this.http.put(
      "https://cooking-ang.firebaseio.com/recipes.json",
      this.recipeService.getRecipes()
    );
  }

  getRecepies() {
    this.http.get("https://cooking-ang.firebaseio.com/recipes.json").pipe(map(data => {

      //returns array of recipes;
      const recipes: Recipe[] = <Recipe[]>data;

      //loop through array of recipes
      for (let recipe of recipes) {
        if (!recipe.ingredients) {
          recipe.ingredients = [];
        }
      }

      return recipes;
    })).subscribe({
      next: recepies => this.recipeService.setRecepies((<Recipe[]>recepies))
    })
  }
}
