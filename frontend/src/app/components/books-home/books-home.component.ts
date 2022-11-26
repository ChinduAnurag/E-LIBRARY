import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-books-home',
  templateUrl: './books-home.component.html',
  styleUrls: ['./books-home.component.css']
})
export class BooksHomeComponent implements OnInit {

  constructor(private apiService:ApiService,private router:Router) { }
books:any=[]

  ngOnInit(): void {
    this.getData()
  
  }
  
  getData(){
    this.apiService .getBookList().subscribe(res=>{
      this.books=res;
      console.log(res);
    })  

    
  }
  editBook(book:any){
    // this.apiService.updateBook(this.books,this.books.id).subscribe(res=>{
    //   this.books = res
    //   console.log(this.books)
    //})
  
localStorage.setItem("editBookId",book._id.toString())
this.router.navigate(['/editBook']);
   
  }


  deleteBook(id:any){
    this.apiService.deleteBook(id).subscribe(res=>{
      this.books = res
      this.getData();
    })
  }

}
