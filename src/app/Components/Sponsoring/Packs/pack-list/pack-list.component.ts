import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from 'src/app/Classes/Pack Class/pack';
import { PackService } from 'src/app/service/Pack Service/pack.service';

@Component({
  selector: 'app-pack-list',
  templateUrl: './pack-list.component.html',
  styleUrls: ['./pack-list.component.css']
})
export class PackListComponent {
  packs:Pack[];
  constructor(private packService:PackService,private router:Router){}
  ngOnInit():void{
     
    this.getPacks();

}
  private getPacks(){
    this.packService.getPacksList().subscribe(data => {
      this.packs = data;
    });  
   }

updatePack(id:number){
  this.router.navigate(['update-pack',id])
}
deletePack(id:number){
this.packService.deletePack(id).subscribe(data => {
  console.log(data);
  this.getPacks();
})
location.reload();

}
goToAddPack(){
  this.router.navigate(['/create-pack'])
}
}
