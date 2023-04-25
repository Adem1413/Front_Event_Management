import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {
  constructor(private router:Router,){}
  private apiUrl = 'http://localhost:3000/data';
  email: string;
  password: string;

 
  onSubmit() {

    if (this.email==='admin' && this.password==='admin')
    {
      this.goToMain();
    }
   
}
goToMain(){
  this.router.navigate(['/main'])
}
}