import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tache } from 'src/app/Classes/MediaTache Class/tache';
import { TacheService } from 'src/app/service/Tache Service/tache.service';

@Component({
  selector: 'app-update-tache',
  templateUrl: './update-tache.component.html',
  styleUrls: ['./update-tache.component.css']
})
export class UpdateTacheComponent {
  id:number;
  tache:Tache;
  constructor(private tacheService:TacheService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.tache=new Tache;
    this.id=this.route.snapshot.params['id'];

   this.tacheService.getTacheById(this.id).subscribe(data =>{
    this.tache=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.tacheService.updateTache(this.id,this.tache).subscribe(data=>{
    this.goToTacheList();
 }, error => console.log(error));
  }
  goToTacheList(){
    this.router.navigate(['/taches'])
  }
}
