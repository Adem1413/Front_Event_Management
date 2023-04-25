import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Oc } from 'src/app/Classes/Oc Class/oc';
import { OcService } from 'src/app/service/Oc Service/oc.service';

@Component({
  selector: 'app-create-oc',
  templateUrl: './create-oc.component.html',
  styleUrls: ['./create-oc.component.css']
})
export class CreateOcComponent {
  oc:Oc= new Oc();
  constructor(private ocService : OcService,private router:Router){}
  ngOnInit():void {

  }
  saveOc(){
    this.ocService.createOc(this.oc).subscribe(data =>{
      console.log(data);
      this.goToOc();
      },
      error =>console.log(error));
  }

  goToOc(){
    this.router.navigate(['/ocs'])
  }

  onSubmit(){
    console.log(this.oc);
    this.saveOc();
  };

}
