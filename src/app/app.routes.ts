import { Routes } from '@angular/router';
import { RecipesComponent } from './recipe/feature/recipes/recipes.component';
import { RecipeComponent } from './recipe/feature/recipe/recipe.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: RecipesComponent },
    { 
        path: 'receitas/:id',
        // LazyLoading
        loadComponent: () => 
            import('./recipe/feature/recipe/recipe.component').then(
                (c) => c.RecipeComponent,
            )
    },
    { path: '**', redirectTo: 'home' }
];
