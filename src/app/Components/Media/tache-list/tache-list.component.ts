import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tache } from 'src/app/Classes/MediaTache Class/tache';
import { TacheService } from 'src/app/service/Tache Service/tache.service';

@Component({
  selector: 'app-tache-list',
  templateUrl: './tache-list.component.html',
  styleUrls: ['./tache-list.component.css']
})
export class TacheListComponent {
  taches:Tache[];
  constructor(private tacheService:TacheService,private router:Router){}
  ngOnInit():void{
     
    this.getTaches();

}
  private getTaches(){
    this.tacheService.getTachesList().subscribe(data => {
      this.taches = data;
    });  
   }

updateTache(id:number){
  this.router.navigate(['update-tache',id])
}
deleteTache(id:number){
this.tacheService.deleteTache(id).subscribe(data => {
  console.log(data);
  this.getTaches();
})
location.reload();

}
goToAddTache(){
  this.router.navigate(['/create-tache'])
}
}
