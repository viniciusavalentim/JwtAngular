import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { user } from '../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  ApiUrl = `https://localhost:7272/api/Auth`;

  constructor(private http: HttpClient) { }

  public register(user: user): Observable<any>{
    return this.http.post<any>(`${this.ApiUrl}/register`, user);
  }

  public login(user: user): Observable<string>{
    return this.http.post(`${this.ApiUrl}/login`, user, { 
      responseType: `text`,
    });
  }

  public logout(): void{
    localStorage.removeItem(`authToken`);
  }

  public getMe(): Observable<string>{
    return this.http.get(`${this.ApiUrl}`, {
      responseType: 'text'
    });
  }


}
