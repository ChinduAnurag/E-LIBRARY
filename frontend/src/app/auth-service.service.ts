import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) { }
  loginToBackend(data:any){

    return this.http.post<any>('http://localhost:8524/api/login',data);
  }
  loggedIn(){
    return !! localStorage.getItem('token')
  }
  getToken(){
    return localStorage.getItem('token');
  }
}
