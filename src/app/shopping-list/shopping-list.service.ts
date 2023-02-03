import {Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {Subject } from "rxjs";

@Injectable()
export class ShoppingListService {
  private ingredients: Ingredient[] = [];
  ingredientsChanged = new Subject<void>();

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(newIngredient: Ingredient) {
    this.ingredients.push(newIngredient);
    this.ingredientsChanged.next();
  }

  addIngredients(newIngredients: Ingredient[]) {
    this.ingredients.push(...newIngredients);
    this.ingredientsChanged.next();
  }
}
