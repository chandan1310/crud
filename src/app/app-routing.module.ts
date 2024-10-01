import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { SignupComponent } from './component/signup/signup.component';
// import { CrudComponent } from './component/crud/crud.component';
import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
// import { canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/aut';

// const redirectToLogin = ( ) =>redirectUnauthorizedTo(['login'])
// const redirectToHome = ( ) =>redirectLoggedInTo(['home'])

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full',},
  {path:'login', component:LoginComponent,},
  {path:'home', component:HomeComponent,},
  {path:'signup', component:SignupComponent,},
  {path:'verifyemail', component:VerifyemailComponent,},
  {path:'signup', component:SignupComponent,},
  {path:'forgetpassword', component:ForgetpasswordComponent,},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './component/login/login.component';
// import { HomeComponent } from './component/home/home.component';
// import { SignupComponent } from './component/signup/signup.component';
// import { VerifyemailComponent } from './component/verifyemail/verifyemail.component';
// import { ForgetpasswordComponent } from './component/forgetpassword/forgetpassword.component';
// import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';

// const redirectToLogin = () => redirectUnauthorizedTo(['login']);
// const redirectToHome = () => redirectLoggedInTo(['home']);

// const routes: Routes = [
//   { path: '', redirectTo: 'login', pathMatch: 'full', canActivate: [redirectToLogin] },
//   { path: 'login', component: LoginComponent, canActivate: [redirectToLogin] },
//   { path: 'home', component: HomeComponent, canActivate: [redirectToHome] },
//   { path: 'signup', component: SignupComponent, canActivate: [redirectToHome] },
//   { path: 'verifyemail', component: VerifyemailComponent, canActivate: [redirectToHome] },
//   { path: 'forgetpassword', component: ForgetpasswordComponent, canActivate: [redirectToHome] },
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
  
// })
// export class AppRoutingModule { }
