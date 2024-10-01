

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  email:string = '';
  password:string= '';
  constructor(private auth: AuthService, private router: Router) { }
  ngOnInit(): void {
   }
   
   sendlink(){
    this.auth.forgotpassword(this.email);
    this.email='';
   }
   goBack() {
    this.router.navigate(['/login']);
  }
}
  

