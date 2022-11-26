import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-addnewbook',
  templateUrl: './addnewbook.component.html',
  styleUrls: ['./addnewbook.component.css']
})
export class AddnewbookComponent implements OnInit {

  bookform: any = new FormGroup({
    'title': new FormControl(''),
    'author': new FormControl(''),
    'genre': new FormControl(''),
    'year': new FormControl(''),
    'description': new FormControl(''),

  })

  constructor(private api:ApiService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.api.addBook(this.bookform.value).subscribe({
      complete: () => {
        alert('data saved successfully')
      }
    }
    )

  }
}
