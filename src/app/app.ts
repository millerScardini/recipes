import { Component, signal } from '@angular/core';
import { Header } from "./shared/ui/header/header";
import { RecipeService } from './recipe/data/recipe.service';
import { RecipesComponent } from './recipe/feature/recipes/recipes.component';

@Component({
  selector: 'app-root',
  imports: [Header, RecipesComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = 'My Recipe Book';

  constructor(private recipeService: RecipeService) {
    this.recipeService.get().subscribe((data) => {
      console.log(data)
    })
  }
}
