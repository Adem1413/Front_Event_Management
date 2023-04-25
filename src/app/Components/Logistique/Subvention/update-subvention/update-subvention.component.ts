import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subvention } from 'src/app/Classes/Subvention Class/subvention';
import { SubventionService } from 'src/app/service/Subvention Service/subvention.service';

@Component({
  selector: 'app-update-subvention',
  templateUrl: './update-subvention.component.html',
  styleUrls: ['./update-subvention.component.css']
})
export class UpdateSubventionComponent implements OnInit {

  id:number;
  subvention:Subvention;
  constructor(private subventionService:SubventionService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.subvention=new Subvention;
    this.id=this.route.snapshot.params['id'];

   this.subventionService.getSubventionById(this.id).subscribe(data =>{
    this.subvention=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.subventionService.updateSubvention(this.id,this.subvention).subscribe(data=>{
    this.goToSubventionList();
 }, error => console.log(error));
  }
  goToSubventionList(){
    this.router.navigate(['/subventions'])
  }
}
