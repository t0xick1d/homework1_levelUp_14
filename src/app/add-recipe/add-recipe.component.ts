import { Component, OnInit } from '@angular/core';
import { RecipeRepositories } from '../recipe.repositories.service';

@Component({
  selector: 'add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.scss'],
})
export class AddRecipeComponent {
  public author = '';
  public data = '';
  public decribe = '';
  constructor(private recipeRepository: RecipeRepositories) {}
  public onAddRecipe(author: string, data: string, decribe: string): void {
    this.recipeRepository.addRecipe(author, data, decribe);
    this.author = '';
    this.data = '';
    this.decribe = '';
  }
}
