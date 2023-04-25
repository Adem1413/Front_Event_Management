import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subvention } from 'src/app/Classes/Subvention Class/subvention';
import { SubventionService } from 'src/app/service/Subvention Service/subvention.service';

@Component({
  selector: 'app-create-subvention',
  templateUrl: './create-subvention.component.html',
  styleUrls: ['./create-subvention.component.css']
})
export class CreateSubventionComponent implements OnInit {
  subvention:Subvention= new Subvention();
  constructor(private subventionService : SubventionService,private router:Router){}
  ngOnInit():void {

  }
  saveSubvention(){
    this.subventionService.createSubvention(this.subvention).subscribe(data =>{
      console.log(data);
      this.goToSubvention();
      },
      error =>console.log(error));
  }

  goToSubvention(){
    this.router.navigate(['/subventions'])
  }

  onSubmit(){
    console.log(this.subvention);
    this.saveSubvention();
  };

}
