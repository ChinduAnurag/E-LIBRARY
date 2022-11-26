import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  //to store new user details

saveNewUser(data:any){
  return this.http.post('http://localhost:8524/api/user',data);

}
getBookList(){
  console.log('http://localhost:8524/api/book');
  return this.http.get('http://localhost:8524/api/book');

}

deleteBook(id:any){
  return this.http.delete(`http://localhost:8524/api/book/${id}`)
}

// to add new student 

addBook(data:any){
  return this.http.post('http://localhost:8524/api/book', data)

}

//singlebook
getBook(id:any){
  return this.http.get(`http://localhost:8524/api/book/${id}`)
}
//edit book
updateBook(data:any){
  return this.http.put(`http://localhost:8524/api/book`, data)
//.subscribe(data=>{console.log(data)})
}
}