import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-editbook',
  templateUrl: './editbook.component.html',
  styleUrls: ['./editbook.component.css']
})
export class EditbookComponent implements OnInit {
  
  book={
    title:'',
    author:'',
    genre:'',
    year:'',
    description:''
  }

  constructor(private apiService :ApiService, private router:Router) { }

  books:any=[]
  editForm: any = new FormGroup({
    'title': new FormControl(''),
    'author': new FormControl(''),
    'genre': new FormControl(''),
    'year': new FormControl(''),
    'description': new FormControl(''),

  })
  

  ngOnInit(): void {
    let singlebookid=localStorage.getItem("editBookId");
    this.apiService.getBook(singlebookid).subscribe(data=>{
      this.book=JSON.parse(JSON.stringify(data))

      this.editForm = new FormGroup({
        title: new FormControl('', [Validators.required]),
        author: new FormControl('', Validators.required),
       genre: new FormControl('', Validators.required),
        year: new FormControl('', Validators.required),
        description: new FormControl('', Validators.required)
      });
    })
    }
    
 
onSubmit(){
  this.apiService.updateBook(this.book);
  localStorage.removeItem('editBookId')
  alert("Updated Successfully")
  this.router.navigate(['books-home'])
 }
 }
