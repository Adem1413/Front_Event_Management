import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Oc } from 'src/app/Classes/Oc Class/oc';
import { OcService } from 'src/app/service/Oc Service/oc.service';

@Component({
  selector: 'app-update-oc',
  templateUrl: './update-oc.component.html',
  styleUrls: ['./update-oc.component.css']
})
export class UpdateOcComponent {
  id:number;
  oc:Oc;
  constructor(private ocService:OcService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.oc=new Oc;
    this.id=this.route.snapshot.params['id'];

   this.ocService.getOcById(this.id).subscribe(data =>{
    this.oc=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.ocService.updateOc(this.id,this.oc).subscribe(data=>{
    this.goToOcList();
 }, error => console.log(error));
  }
  goToOcList(){
    this.router.navigate(['/ocs'])
  }
}
