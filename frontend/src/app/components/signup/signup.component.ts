import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
// export class user{
//   public email!: string;
//   public password!: string;
// }
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  //model = new user();
  user={email:'',password:''};
  constructor(private apiService:ApiService,private router:Router) { }

  ngOnInit(): void {
  }
 
  onSubmit(form: any) {
    console.log(form.value);
   // this.apiService.saveNewUser(form.value);
   this.apiService.saveNewUser(form.value).subscribe({
    complete: () => {
      alert('data saved successfully')
      this.router.navigate(['books-home'])

    }
  }
  )
   
  }
 // user={email:'admin',password:'1234'};
}
