import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe.model';

@Service()
export class RecipeService {

    httpClient = inject(HttpClient);
    apiBaseUrl = environment.apiBaseUrl

    public get(): Observable<Recipe[]> {
        return this.httpClient.get<Recipe[]>(`${this.apiBaseUrl}/api/v1/recipes`);
    }

}
