import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervenant } from 'src/app/Classes/Intervenant Class/intervenant';
import { IntervenantService } from 'src/app/service/Intervenant Service/intervenant.service';

@Component({
  selector: 'app-intervenent-list',
  templateUrl: './intervenent-list.component.html',
  styleUrls: ['./intervenent-list.component.css']
})
export class IntervenentListComponent implements OnInit {
  intervenants:Intervenant[];
  constructor(private intervenentService:IntervenantService,private router:Router){}
  ngOnInit():void{
     
    this.getIntervenants();

}
  private getIntervenants(){
    this.intervenentService.getIntervenantsList().subscribe(data => {
      this.intervenants = data;
    });  
   }

updateIntervenant(id:number){
  this.router.navigate(['update-intervenant',id])
}
deleteIntervenant(id:number){
this.intervenentService.deleteIntervenant(id).subscribe(data => {
  console.log(data);
  this.getIntervenants();
})
location.reload();

}
goToAddIntervenant(){
  this.router.navigate(['/create-intervenant'])
}
}
