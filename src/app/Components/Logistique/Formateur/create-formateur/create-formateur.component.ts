import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Formateur } from 'src/app/Classes/Formateur Class/formateur';
import { FormateurService } from 'src/app/service/Formateur Service/formateur.service';

@Component({
  selector: 'app-create-formateur',
  templateUrl: './create-formateur.component.html',
  styleUrls: ['./create-formateur.component.css']
})
export class CreateFormateurComponent implements OnInit {

  formateur:Formateur= new Formateur();
  constructor(private formateurService : FormateurService,private router:Router){}
  ngOnInit():void {

  }
  saveFormateur(){
    this.formateurService.createFormateur(this.formateur).subscribe(data =>{
      console.log(data);
      this.goToFormateur();
      },
      error =>console.log(error));
  }

  goToFormateur(){
    this.router.navigate(['/formateurs'])
  }

  onSubmit(){
    console.log(this.formateur);
    this.saveFormateur();
  };

}
