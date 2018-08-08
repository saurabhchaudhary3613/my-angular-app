import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('First Recipe', 'This is a test recipe',
      'https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/2018/01/02143436/vegetarian-cacciatore-recipe/x.jpg'),
    new Recipe('Second Recipe', 'This is a test recipe',
    'https://assets.blog.foodnetwork.ca/imageserve/wp-content/uploads/2018/01/02143436/vegetarian-cacciatore-recipe/x.jpg')
  ];
  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

  ngOnInit() {
    console.log(this.recipes);
  }

}
