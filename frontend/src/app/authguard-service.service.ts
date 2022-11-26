import { Injectable } from '@angular/core';
import{Observable} from 'rxjs';
import { AuthServiceService } from './auth-service.service';
import { ActivatedRouteSnapshot,CanActivate,Router,RouterStateSnapshot,UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor(private authService:AuthServiceService,private router:Router) { }

  canActive():boolean{
    if(this.authService.loggedIn()){
      return true;
    }
    else{
      this.router.navigate(['login']);
      return false;
    }
  }





}
