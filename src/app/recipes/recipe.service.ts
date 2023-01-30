import {EventEmitter, Injectable} from "@angular/core";
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Pizza',
      'A delicious Pizza',
      'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSnCn9k-c100ccJnb6N8Odb8Ge-6iisByej4f6xu-rSmo4tKAxxcWz_AOgH8f1THy55',
      [new Ingredient('Cheese', 200), new Ingredient('Salami', 100)]),
    new Recipe(
      'Cheeseburger',
      'A fucking good Cheeseburger',
      'https://www.gourmet-magazin.de/fileadmin/_processed_/7/6/csm_cheeseburger-1_2f797a6fd4.jpg',
      [new Ingredient('Bun', 1), new Ingredient('Beef', 250)])
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe{
    return this.recipes[id];
  }

  addRecipe(newRecipe: Recipe) {
    this.recipes.push(newRecipe)
  }
}
