import { Component, OnInit } from '@angular/core';
import { Formateur } from '../../../../Classes/Formateur Class/formateur';
import { FormateurService } from '../../../../service/Formateur Service/formateur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formateur-list',
  templateUrl: './formateur-list.component.html',
  styleUrls: ['./formateur-list.component.css']
})
export class FormateurListComponent implements OnInit {

   formateurs:Formateur[];
  constructor(private formateurService:FormateurService,private router:Router){}
  ngOnInit():void{
     
    this.getFormateurs();

}
  private getFormateurs(){
    this.formateurService.getFormateursList().subscribe(data => {
      this.formateurs = data;
    });  
   }

updateFormateur(id:number){
  this.router.navigate(['update-formateur',id])
}
deleteFormateur(id:number){
this.formateurService.deleteFormateur(id).subscribe(data => {
  console.log(data);
  this.getFormateurs();
})
location.reload();

}
goToAddFormateur(){
  this.router.navigate(['/create-formateur'])
}
}