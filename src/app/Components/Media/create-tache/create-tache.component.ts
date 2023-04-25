import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/Classes/MediaTache Class/tache';
import { TacheService } from 'src/app/service/Tache Service/tache.service';

@Component({
  selector: 'app-create-tache',
  templateUrl: './create-tache.component.html',
  styleUrls: ['./create-tache.component.css']
})
export class CreateTacheComponent {
  tache:Tache= new Tache();
  constructor(private tacheService : TacheService,private router:Router){}
  ngOnInit():void {

  }
  saveTache(){
    this.tacheService.createTache(this.tache).subscribe(data =>{
      console.log(data);
      this.goToTache();
      },
      error =>console.log(error));
  }

  goToTache(){
    this.router.navigate(['/taches'])
  }

  onSubmit(){
    console.log(this.tache);
    this.saveTache();
  };
}
