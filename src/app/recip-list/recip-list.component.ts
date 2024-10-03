import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipes.iterface';
import { RecipeRepositories } from '../recipe.repositories.service';

@Component({
  selector: 'recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.scss'],
})
export class RecipListComponent {
  public filter: string = 'all';
  constructor(private recipeRepositories: RecipeRepositories) {}
  public getRecipes(): Recipe[] {
    return this.recipeRepositories.getRecipeList();
  }
  public onDeleteRecipe(id: number): void {
    this.recipeRepositories.deleteRecipe(id);
  }
  public changeFilter(filter: string): void {
    this.recipeRepositories.changeFilter(filter);
  }
}
