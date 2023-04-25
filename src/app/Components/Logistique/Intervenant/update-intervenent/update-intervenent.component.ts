import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Intervenant } from 'src/app/Classes/Intervenant Class/intervenant';
import { IntervenantService } from 'src/app/service/Intervenant Service/intervenant.service';

@Component({
  selector: 'app-update-intervenent',
  templateUrl: './update-intervenent.component.html',
  styleUrls: ['./update-intervenent.component.css']
})
export class UpdateIntervenentComponent implements OnInit {

  id:number;
  intervenant:Intervenant;
  constructor(private intervenantService:IntervenantService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.intervenant=new Intervenant;
    this.id=this.route.snapshot.params['id'];

   this.intervenantService.getIntervenantById(this.id).subscribe(data =>{
    this.intervenant=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.intervenantService.updateIntervenant(this.id,this.intervenant).subscribe(data=>{
    this.goToIntervenantList();
 }, error => console.log(error));
  }
  goToIntervenantList(){
    this.router.navigate(['/intervenants'])
  }
 
}
