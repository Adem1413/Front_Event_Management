import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Intervenant } from 'src/app/Classes/Intervenant Class/intervenant';
import { IntervenantService } from 'src/app/service/Intervenant Service/intervenant.service';

@Component({
  selector: 'app-create-intervenent',
  templateUrl: './create-intervenent.component.html',
  styleUrls: ['./create-intervenent.component.css']
})
export class CreateIntervenentComponent implements OnInit{
  intervenant:Intervenant= new Intervenant();
  constructor(private intervenantrService : IntervenantService,private router:Router){}
  ngOnInit():void {

  }
  saveIntervenant(){
    this.intervenantrService.createIntervenant(this.intervenant).subscribe(data =>{
      console.log(data);
      this.goToIntervenant();
      },
      error =>console.log(error));
  }

  goToIntervenant(){
    this.router.navigate(['/intervenants'])
  }

  onSubmit(){
    console.log(this.intervenant);
    this.saveIntervenant();
  };
}
