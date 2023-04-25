import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',]
})
export class AppComponent {
  title='Event';
  isAuthenticated = true;
  constructor(private routerc:Router,public router:Router,){}

  goToLog(){
    this.routerc.navigate(['/logistique-main'])
  }
  goToSponso(){
    this.routerc.navigate(['/sponsoring-main'])
  }
  goToMedia(){
    this.routerc.navigate(['/media-main'])
  }
  goToProc(){
    this.routerc.navigate(['/gestion-equipe-et-processus'])
  }
  goToMain(){
    this.routerc.navigate(['main'])
  }
  inLoginPage(){
    return this.router.url==='/login';
  }

  
}
