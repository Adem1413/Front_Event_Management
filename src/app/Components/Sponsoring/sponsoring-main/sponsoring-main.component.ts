import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sponsoring-main',
  templateUrl: './sponsoring-main.component.html',
  styleUrls: ['./sponsoring-main.component.css']
})
export class SponsoringMainComponent {
  constructor(private router:Router){}
  goToEntreprise(){
    this.router.navigate(["/entreprises"])
  }
  goToPack(){
    this.router.navigate(["/packs"])
  }

}
