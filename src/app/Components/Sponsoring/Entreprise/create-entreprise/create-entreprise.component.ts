import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/Classes/Entreprise Class/entreprise';
import { EntrepriseService } from 'src/app/service/Entreprise Service/entreprise.service';

@Component({
  selector: 'app-create-entreprise',
  templateUrl: './create-entreprise.component.html',
  styleUrls: ['./create-entreprise.component.css']
})
export class CreateEntrepriseComponent implements OnInit {
  entreprise:Entreprise= new Entreprise();
  constructor(private entrepriseService : EntrepriseService,private router:Router){}
  ngOnInit():void {

  }
  saveEntreprise(){
    this.entrepriseService.createEntreprise(this.entreprise).subscribe(data =>{
      console.log(data);
      this.goToEntreprise();
      },
      error =>console.log(error));
  }

  goToEntreprise(){
    this.router.navigate(['/entreprises'])
  }

  onSubmit(){
    console.log(this.entreprise);
    this.saveEntreprise();
  };
}
