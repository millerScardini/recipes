import { Component, inject, input, OnInit } from '@angular/core';
import { RecipeService } from '../../data/recipe.service';
import { Observable } from 'rxjs';
import { Recipe } from '../../data/recipe.model';
import { AsyncPipe } from '@angular/common';
import { RecipeDetailComponent } from '../../ui/recipe-detail/recipe-detail.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe.component',
  imports: [AsyncPipe, RecipeDetailComponent],
  templateUrl: './recipe.component.html',
  styleUrl: './recipe.component.css',
})
export class RecipeComponent implements OnInit {

  // Inputs
  id = input<string>();

  // Services
  route = inject(ActivatedRoute);
  recipeService = inject(RecipeService);

  // Observables
  recipe$!: Observable<Recipe>;

  // Angular 15
  // recipe$: Observable<Recipe> = this.route.params.pipe(
  //   map((params) => params['id']),
  //   switchMap((id) => this.recipeService.getById(id))
  // );

  // Angular 16
  ngOnInit(): void {
    const id = this.id();
    if (id) this.recipe$ = this.recipeService.getById(id);
  }
}
