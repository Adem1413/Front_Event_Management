import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processus-gestion-equipe-main',
  templateUrl: './processus-gestion-equipe-main.component.html',
  styleUrls: ['./processus-gestion-equipe-main.component.css']
})
export class ProcessusGestionEquipeMainComponent {
  constructor(private router:Router){}

  goToOc(){
    this.router.navigate(["/ocs"])
  }
  goToEquipe(){
    this.router.navigate(["/equipes"])
  }
  goToProcessus(){
    this.router.navigate(["/processuss"])
  }
}
