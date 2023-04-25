import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subvention } from 'src/app/Classes/Subvention Class/subvention';
import { SubventionService } from 'src/app/service/Subvention Service/subvention.service';

@Component({
  selector: 'app-subvention-list',
  templateUrl: './subvention-list.component.html',
  styleUrls: ['./subvention-list.component.css']
})
export class SubventionListComponent implements OnInit {
  
  subventions:Subvention[];
  constructor(private subventionService:SubventionService,private router:Router){}
  ngOnInit():void{
     
    this.getSubventions();

}
  private getSubventions(){
    this.subventionService.getSubventionsList().subscribe(data => {
      this.subventions = data;
    });  
   }

   updateSubvention(id:number){
  this.router.navigate(['/update-subvention',id])
}
deleteSubvention(id:number){
this.subventionService.deleteSubvention(id).subscribe(data => {
  console.log(data);
  this.getSubventions();
})
location.reload();

}
goToAddSubvention(){
  this.router.navigate(['/create-subvention'])
}
}
