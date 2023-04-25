import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { EquipeService } from 'src/app/service/Equipe Service/equipe.service';

@Component({
  selector: 'app-update-equipe',
  templateUrl: './update-equipe.component.html',
  styleUrls: ['./update-equipe.component.css']
})
export class UpdateEquipeComponent {
  id:number;
  equipe:Equipe;
  constructor(private equipeService:EquipeService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.equipe=new Equipe;
    this.id=this.route.snapshot.params['id'];

   this.equipeService.getEquipeById(this.id).subscribe(data =>{
    this.equipe=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.equipeService.updateEquipe(this.id,this.equipe).subscribe(data=>{
    this.goToEquipeList();
 }, error => console.log(error));
  }
  goToEquipeList(){
    this.router.navigate(['/equipes'])
  }
}
