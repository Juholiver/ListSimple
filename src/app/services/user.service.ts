import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://sheet.best/api/sheets/ff6aba20-5f8e-404c-8c74-2189f91318f6'

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE
  //retorna a lista de usuarios READ
  getUsers():Observable<User[]>{
    return this.httpClient.get<User[]>(this.apiUrl)
  }
}
