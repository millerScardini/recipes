import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Category } from './category.model';

@Service()
export class CategoryService {

    httpClient = inject(HttpClient);
    apiBaseUrl = environment.apiBaseUrl

    public get(): Observable<Category[]> {
        return this.httpClient.get<Category[]>(`${this.apiBaseUrl}/api/v1/categories`)
    }

}
