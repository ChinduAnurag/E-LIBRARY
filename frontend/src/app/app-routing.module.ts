import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddnewbookComponent } from './components/addnewbook/addnewbook.component';
import { BooksHomeComponent } from './components/books-home/books-home.component';
import { EditbookComponent } from './components/editbook/editbook.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [{path:'',component:LoginComponent},
{path:'signup',component:SignupComponent},{path:'login',component:LoginComponent},{path:'books-home',component:BooksHomeComponent},{path:'navbar',component:NavbarComponent},{ path: 'addNew', component: AddnewbookComponent },{path:'editBook',component:EditbookComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
