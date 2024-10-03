import { Injectable } from '@angular/core';
import { Recipe } from './shared/recipes.iterface';

@Injectable({
  providedIn: 'root',
})
export class RecipeRepositories {
  private recipes: Recipe[] = [];
  public getRecipeList(filter: string = ''): Recipe[] {
    return this.recipes;
  }
  public addRecipe(author: string, data: string, decribe: string): void {
    let randomId = Math.floor(Math.random() * 10000);
    const newRecipe: Recipe = { id: randomId, author, data, decribe };
    this.recipes.push(newRecipe);
  }
  public deleteRecipe(id: number): void {
    this.recipes = this.recipes.filter((item) => item.id !== id);
  }
  public changeFilter(filter: string): void {
    if (filter === 'sort') {
      this.getRecipeList().sort(
        (item1: any, item2: any) =>
          new Date(item1.data).getTime() - new Date(item2.data).getTime()
      );
    }
    return;
  }
}
