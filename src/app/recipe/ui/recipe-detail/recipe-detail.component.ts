import { Recipe } from './../../data/recipe.model';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-recipe-detail',
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RecipeDetailComponent {
  recipe = input<Recipe>();
}
