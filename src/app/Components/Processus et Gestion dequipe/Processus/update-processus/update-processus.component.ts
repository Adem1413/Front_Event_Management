import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Processus } from 'src/app/Classes/Processus Class/processus';
import { ProcessusService } from 'src/app/service/Processus Service/processus.service';

@Component({
  selector: 'app-update-processus',
  templateUrl: './update-processus.component.html',
  styleUrls: ['./update-processus.component.css']
})
export class UpdateProcessusComponent {
  id:number;
  processus:Processus;
  constructor(private processusrService:ProcessusService ,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.processus=new Processus;
    this.id=this.route.snapshot.params['id'];

   this.processusrService.getProcessusById(this.id).subscribe(data =>{
    this.processus=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.processusrService.updateProcessus(this.id,this.processus).subscribe(data=>{
    this.goToProcessusList();
 }, error => console.log(error));
  }
  goToProcessusList(){
    this.router.navigate(['/processuss'])
  }
}
