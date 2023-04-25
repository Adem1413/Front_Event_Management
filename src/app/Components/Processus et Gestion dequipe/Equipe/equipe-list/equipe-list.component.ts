import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { Oc } from 'src/app/Classes/Oc Class/oc';
import { EquipeService } from 'src/app/service/Equipe Service/equipe.service';

@Component({
  selector: 'app-equipe-list',
  templateUrl: './equipe-list.component.html',
  styleUrls: ['./equipe-list.component.css']
})
export class EquipeListComponent {
  oc:Oc[];
  equipes:Equipe[];
  constructor(private equipeService:EquipeService,private router:Router){}
  ngOnInit():void{
    
    this.getEquipes();

}
  private getEquipes(){
    this.equipeService.getEquipesList().subscribe(data => {
      this.equipes = data;
    });  
   }

updateEquipe(id:number){
  this.router.navigate(['update-equipe',id])
}
deleteEquipe(id:number){
this.equipeService.deleteEquipe(id).subscribe(data => {
  console.log(data);
  this.getEquipes();
})
location.reload();

}
goToAddEquipe(){
  this.router.navigate(['/create-equipe'])
}
}
