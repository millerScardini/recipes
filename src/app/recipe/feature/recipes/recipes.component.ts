import { CategoryService } from './../../data/category.service';
import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RecipeGridComponent } from '../../ui/recipe-grid/recipe-grid.component';
import { RecipeService } from '../../data/recipe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  imports: [AsyncPipe, RecipeGridComponent],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {

  // Services
  recipeService = inject(RecipeService);
  categoryService = inject(CategoryService);
  router = inject(Router);

  // Observables
  recipes$ = this.recipeService.get();
  categories$ = this.categoryService.get();

  goToRecipe(id: string) {
    this.router.navigate(['/receitas', id])
  }
}
