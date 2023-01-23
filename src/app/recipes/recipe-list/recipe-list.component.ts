import {Component, OnInit} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  recipes: Recipe[] = [
    new Recipe('Pizza', 'A Delicious Pizza', 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSnCn9k-c100ccJnb6N8Odb8Ge-6iisByej4f6xu-rSmo4tKAxxcWz_AOgH8f1THy55'),
    new Recipe('Pizza', 'A Delicious Pizza', 'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSnCn9k-c100ccJnb6N8Odb8Ge-6iisByej4f6xu-rSmo4tKAxxcWz_AOgH8f1THy55')
  ];

  constructor() { }

  ngOnInit() {
  }

}
