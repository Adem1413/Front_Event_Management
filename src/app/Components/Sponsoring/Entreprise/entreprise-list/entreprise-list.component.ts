import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Entreprise } from 'src/app/Classes/Entreprise Class/entreprise';
import { EntrepriseService } from 'src/app/service/Entreprise Service/entreprise.service';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.css']
})
export class EntrepriseListComponent implements OnInit {
  entreprises:Entreprise[];
  constructor(private entrepriseService:EntrepriseService,private router:Router){}
  ngOnInit():void{
     
    this.getEntreprises();

}
  private getEntreprises(){
    this.entrepriseService.getEntreprisesList().subscribe(data => {
      this.entreprises = data;
    });  
   }

updateEntreprise(id:number){
  this.router.navigate(['update-entreprise',id])
}
deleteEntreprise(id:number){
this.entrepriseService.deleteEntreprise(id).subscribe(data => {
  console.log(data);
  this.getEntreprises();
})
location.reload();

}
goToAddEntreprise(){
  this.router.navigate(['/create-entreprise'])
}
}
