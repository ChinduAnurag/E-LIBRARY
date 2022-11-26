import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user={email:'',password:''};
 

  
  constructor(private auth:AuthServiceService,private router:Router) { }

  // loginForm: any=new FormGroup({
  //   e1:new FormControl(null),
  //   p1:new FormControl(null)
  // })
  ngOnInit(): void {
  }
 login(form: any){

  console.log('........',this.user);

  let data=this.user;
  console.log(">>>>>>",this.user);
  

  this.auth.loginToBackend(this.user).subscribe(res=>{
 
    console.log('data from backend',res);

    localStorage.setItem('token',res.token)
  this.router.navigate(['/books-home']);
})
  }

}
