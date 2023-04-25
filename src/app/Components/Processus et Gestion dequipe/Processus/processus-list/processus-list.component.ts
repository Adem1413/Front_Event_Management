import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { Processus } from 'src/app/Classes/Processus Class/processus';
import { EquipeService } from 'src/app/service/Equipe Service/equipe.service';
import { ProcessusService } from 'src/app/service/Processus Service/processus.service';

@Component({
  selector: 'app-processus-list',
  templateUrl: './processus-list.component.html',
  styleUrls: ['./processus-list.component.css']
})
export class ProcessusListComponent {
 
  processuss:Processus[];
  constructor(private processusService:ProcessusService,private router:Router){}
  ngOnInit():void{
     
    this.getProcessuss();

}
  private getProcessuss(){
    this.processusService.getProcessussList().subscribe(data => {
      this.processuss = data;
    });  
   }

updateProcessus(id:number){
  this.router.navigate(['update-processus',id])
}
deleteProcessus(id:number){
this.processusService.deleteProcessus(id).subscribe(data => {
  console.log(data);
  this.getProcessuss();
})
location.reload();

}
goToAddProcessus(){
  this.router.navigate(['/create-processus'])
}
}
