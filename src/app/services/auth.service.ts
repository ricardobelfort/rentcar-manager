import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { registerUser, User } from '../interfaces/registerUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000';
  private http = inject(HttpClient);

  registerUser(user: registerUser) {
    return this.http.post(`${this.baseUrl}/users`, user);
  }

  getUserDetails(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.baseUrl}/users?email=${email}&password=${password}`
    );
  }
}
