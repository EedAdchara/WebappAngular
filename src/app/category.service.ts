import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryResponse } from './category.interface';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private url = 'https://api.publicapis.org/categories';

  constructor(private http: HttpClient) {}

  getCategory(): Observable<CategoryResponse> {
    return this.http.get<CategoryResponse>(this.url);
  }
}
