import {Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {Ingredient} from "../../shared/ingredient.model";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @Output() newIngredient = new EventEmitter<Ingredient>();
  @ViewChild('nameInput', {static: true}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: true}) amountInputRef: ElementRef;

  onAdd() {
    this.newIngredient.emit(new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value));
  }
}
