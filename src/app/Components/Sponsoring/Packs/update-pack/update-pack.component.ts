import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pack } from 'src/app/Classes/Pack Class/pack';
import { PackService } from 'src/app/service/Pack Service/pack.service';

@Component({
  selector: 'app-update-pack',
  templateUrl: './update-pack.component.html',
  styleUrls: ['./update-pack.component.css']
})
export class UpdatePackComponent {
  id:number;
  pack:Pack;
  constructor(private packService:PackService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.pack=new Pack;
    this.id=this.route.snapshot.params['id'];

   this.packService.getPackById(this.id).subscribe(data =>{
    this.pack=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.packService.updatePack(this.id,this.pack).subscribe(data=>{
    this.goToPackList();
 }, error => console.log(error));
  }
  goToPackList(){
    this.router.navigate(['/packs'])
  }
}
