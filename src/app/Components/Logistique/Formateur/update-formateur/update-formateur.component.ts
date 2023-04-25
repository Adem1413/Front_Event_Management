import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Formateur } from 'src/app/Classes/Formateur Class/formateur';
import { FormateurService } from 'src/app/service/Formateur Service/formateur.service';

@Component({
  selector: 'app-update-formateur',
  templateUrl: './update-formateur.component.html',
  styleUrls: ['./update-formateur.component.css']
})
export class UpdateFormateurComponent implements OnInit {
  
  id:number;
  formateur:Formateur;
  constructor(private formateurService:FormateurService,private route:ActivatedRoute,private router:Router){}

  ngOnInit(): void {
    this.formateur=new Formateur;
    this.id=this.route.snapshot.params['id'];

   this.formateurService.getFormateurById(this.id).subscribe(data =>{
    this.formateur=data;
   }, error => console.log(error));
  }
 
  onSubmit(){
   this.formateurService.updateFormateur(this.id,this.formateur).subscribe(data=>{
    this.goToFormateurList();
 }, error => console.log(error));
  }
  goToFormateurList(){
    this.router.navigate(['/formateurs'])
  }
 
}
