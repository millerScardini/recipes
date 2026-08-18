import { CategoryService } from './../../data/category.service';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RecipeGridComponent } from '../../ui/recipe-grid/recipe-grid.component';
import { RecipeService } from '../../data/recipe.service';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe, RecipeGridComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  recipeService = inject(RecipeService)
  categoryService = inject(CategoryService)

  recipes$ = this.recipeService.get();
  categories$ = this.categoryService.get();
}
