import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RecepieService } from "../recipes/recipe.service";

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
}
