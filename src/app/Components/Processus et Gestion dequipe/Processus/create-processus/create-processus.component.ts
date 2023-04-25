import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { Processus } from 'src/app/Classes/Processus Class/processus';
import { EquipeService } from 'src/app/service/Equipe Service/equipe.service';
import { ProcessusService } from 'src/app/service/Processus Service/processus.service';

@Component({
  selector: 'app-create-processus',
  templateUrl: './create-processus.component.html',
  styleUrls: ['./create-processus.component.css']
})
export class CreateProcessusComponent {
  equipe:Equipe= new Equipe;
  processus:Processus= new Processus();
  
  constructor(private processusService : ProcessusService,private equipeService:EquipeService,private router:Router){}
  ngOnInit():void {

  }
  saveProcessus(){
    this.processusService.createProcessus(this.processus).subscribe(data =>{
      console.log(data);
      this.goToProcessus();
      },
      error =>console.log(error));
  }

  goToProcessus(){
    this.router.navigate(['/processuss'])
  }

  onSubmit(){
    console.log(this.processus);
    this.saveProcessus();
  };

  saveEquipe(){

    this.equipeService.createEquipe(this.equipe).subscribe(data =>{
      console.log(data);
    
      },
      error =>console.log(error));
  }

  
}
