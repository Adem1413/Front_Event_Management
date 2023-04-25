import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Entreprise } from 'src/app/Classes/Entreprise Class/entreprise';
import { EntrepriseService } from 'src/app/service/Entreprise Service/entreprise.service';

@Component({
  selector: 'app-update-entreprise',
  templateUrl: './update-entreprise.component.html',
  styleUrls: ['./update-entreprise.component.css']
})
export class UpdateEntrepriseComponent implements OnInit {
  id:number;
  entreprise:Entreprise;
  constructor(private entrepriseService:EntrepriseService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.entreprise=new Entreprise;
    this.id=this.route.snapshot.params['id'];

   this.entrepriseService.getEntrepriseById(this.id).subscribe(data =>{
    this.entreprise=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.entrepriseService.updateEntreprise(this.id,this.entreprise).subscribe(data=>{
    this.goToEntrepriseList();
 }, error => console.log(error));
  }
  goToEntrepriseList(){
    this.router.navigate(['/entreprises'])
  }
}
