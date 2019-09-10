import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecepieService } from "../recipes/recipe.service";
import { Recipe } from '../recipes/recipe.model';
import { map } from 'rxjs/operators';

import { AuthService } from '../auth/auth.service';


@Injectable({
  providedIn: "root"
})
export class DatabaseService {
  constructor(
    private http: HttpClient,
    private recipeService: RecepieService,
    private auth: AuthService
  ) { }

  saveRecipes() {

    const token = this.auth.getToken();

    //returns observable
    return this.http.put(
      `https://cooking-ang.firebaseio.com/recipes.json?auth=${token}`,
      this.recipeService.getRecipes()
    );


  }

  getRecepies() {

    this.auth.getToken();

    const token = this.auth.token;

    //*TODO: HANDLE WHEN token == null


    this.http.get(`https://cooking-ang.firebaseio.com/recipes.json?auth=${token}`).pipe(map(data => {

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
