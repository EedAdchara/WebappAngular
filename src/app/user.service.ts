import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  getUser(name?: string): Observable<User[]> {
    //name = 'a';
    const params = name ? { name_like: name } : undefined;
    return this.http.get<User[]>(this.url, { params})
  }
}
