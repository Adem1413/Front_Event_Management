import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Oc } from 'src/app/Classes/Oc Class/oc';
import { OcService } from 'src/app/service/Oc Service/oc.service';

@Component({
  selector: 'app-oc-list',
  templateUrl: './oc-list.component.html',
  styleUrls: ['./oc-list.component.css']
})
export class OcListComponent {
  ocs:Oc[];
  constructor(private ocService:OcService,private router:Router){}
  ngOnInit():void{
     
    this.getOcs();

}
  private getOcs(){
    this.ocService.getOcsList().subscribe(data => {
      this.ocs = data;
    });  
   }

updateOc(id:number){
  this.router.navigate(['update-oc',id])
}
deleteOc(id:number){
this.ocService.deleteOc(id).subscribe(data => {
  console.log(data);
  this.getOcs();
})
location.reload();

}
goToAddOc(){
  this.router.navigate(['/create-oc'])
}
}
