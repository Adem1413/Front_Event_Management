import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pack } from 'src/app/Classes/Pack Class/pack';
import { PackService } from 'src/app/service/Pack Service/pack.service';

@Component({
  selector: 'app-create-pack',
  templateUrl: './create-pack.component.html',
  styleUrls: ['./create-pack.component.css']
})
export class CreatePackComponent {
  pack:Pack= new Pack();
  constructor(private packService : PackService,private router:Router){}
  ngOnInit():void {

  }
  savePack(){
    this.packService.createPack(this.pack).subscribe(data =>{
      console.log(data);
      this.goToPack();
      },
      error =>console.log(error));
  }

  goToPack(){
    this.router.navigate(['/packs'])
  }

  onSubmit(){
    console.log(this.pack);
    this.savePack();
  };
}
