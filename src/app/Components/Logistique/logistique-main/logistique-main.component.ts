import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logistique-main',
  templateUrl: './logistique-main.component.html',
  styleUrls: ['./logistique-main.component.css']
})
export class LogistiqueMainComponent {

  constructor(private router:Router){}

  goToFormateur(){
    this.router.navigate(["/formateurs"])
  }
  goToSubvention(){
    this.router.navigate(["/subventions"])
  }
  goToIntervenant(){
    this.router.navigate(["/intervenants"])
  }
}
