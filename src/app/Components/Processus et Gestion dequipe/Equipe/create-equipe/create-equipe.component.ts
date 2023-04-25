import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Equipe } from 'src/app/Classes/Equipe Class/equipe';
import { EquipeService } from 'src/app/service/Equipe Service/equipe.service';
import { FormGroup, FormControl,FormArray, FormBuilder, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-create-equipe',
  templateUrl: './create-equipe.component.html',
  styleUrls: ['./create-equipe.component.css']
})
export class CreateEquipeComponent {
  equipe: Equipe = new Equipe();
  equipeForm: FormGroup;

  constructor(
    private equipeService: EquipeService,
    private router: Router,
    private fb: FormBuilder
  ){}

  ngOnInit(): void {
    this.equipeForm = this.fb.group({
      nom: [''],
      comite: [''],
      ocs: this.fb.array([this.initOcsRows()]),
    });
  }

  get ocs(): FormArray {
    return this.equipeForm.get('ocs') as FormArray;
  }

  newOc(): FormGroup {
    return this.fb.group({
      nom: '',
      prenom: '',
      niveau: '',
      specialite: '',
      numtel: '',
    });
  }

  addOcs() {
    this.ocs.push(this.newOc());
  }

  initOcsRows() {
    return this.fb.group({
      nom: '',
      prenom: '',
      niveau: '',
      specialite: '',
      numtel: '',
    });
  }

  saveEquipe() {
    this.equipeService.createEquipe(this.equipeForm.value).subscribe(
      (data) => {
        console.log(data);
        this.goToEquipe();
      },
      (error) => console.log(error)
    );
  }

  goToEquipe() {
    this.router.navigate(['/equipes']);
  }

  onSubmit() {
    console.log(this.equipeForm.value);
    this.saveEquipe();
  }
}
