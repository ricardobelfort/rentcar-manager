import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { registerUser, User } from '../interfaces/registerUser';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiURL = environment.apiUrl;
  private http = inject(HttpClient);

  registerUser(user: registerUser) {
    return this.http.post(`${this.apiURL}/users`, user);
  }

  getUserDetails(email: string, password: string): Observable<User[]> {
    return this.http.get<User[]>(
      `${this.apiURL}/users?email=${email}&password=${password}`
    );
  }
}
