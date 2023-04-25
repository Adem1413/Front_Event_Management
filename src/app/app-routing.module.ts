import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormateurListComponent } from './Components/Logistique/Formateur/formateur-list/formateur-list.component';
import { CreateFormateurComponent } from './Components/Logistique/Formateur/create-formateur/create-formateur.component';
import { UpdateFormateurComponent } from './Components/Logistique/Formateur/update-formateur/update-formateur.component';
import { LogistiqueMainComponent } from './Components/Logistique/logistique-main/logistique-main.component';
import { SponsoringMainComponent } from './Components/Sponsoring/sponsoring-main/sponsoring-main.component';
import { MediaMainComponent } from './Components/Media/media-main/media-main.component';
import { SubventionListComponent } from './Components/Logistique/Subvention/subvention-list/subvention-list.component';
import { CreateSubventionComponent } from './Components/Logistique/Subvention/create-subvention/create-subvention.component';
import { UpdateSubventionComponent } from './Components/Logistique/Subvention/update-subvention/update-subvention.component';
import { IntervenentListComponent } from './Components/Logistique/Intervenant/intervenent-list/intervenent-list.component';
import { CreateIntervenentComponent } from './Components/Logistique/Intervenant/create-intervenent/create-intervenent.component';
import { UpdateIntervenentComponent } from './Components/Logistique/Intervenant/update-intervenent/update-intervenent.component';
import { ProcessusGestionEquipeMainComponent } from './Components/Processus et Gestion dequipe/processus-gestion-equipe-main/processus-gestion-equipe-main.component';
import { OcListComponent } from './Components/Processus et Gestion dequipe/Ocs/oc-list/oc-list.component';
import { CreateOcComponent } from './Components/Processus et Gestion dequipe/Ocs/create-oc/create-oc.component';
import { UpdateOcComponent } from './Components/Processus et Gestion dequipe/Ocs/update-oc/update-oc.component';
import { EquipeListComponent } from './Components/Processus et Gestion dequipe/Equipe/equipe-list/equipe-list.component';
import { ProcessusListComponent } from './Components/Processus et Gestion dequipe/Processus/processus-list/processus-list.component';
import { CreateEquipeComponent } from './Components/Processus et Gestion dequipe/Equipe/create-equipe/create-equipe.component';
import { UpdateEquipeComponent } from './Components/Processus et Gestion dequipe/Equipe/update-equipe/update-equipe.component';

import { UpdateProcessusComponent } from './Components/Processus et Gestion dequipe/Processus/update-processus/update-processus.component';
import { EntrepriseListComponent } from './Components/Sponsoring/Entreprise/entreprise-list/entreprise-list.component';
import { CreateEntrepriseComponent } from './Components/Sponsoring/Entreprise/create-entreprise/create-entreprise.component';
import { UpdateEntrepriseComponent } from './Components/Sponsoring/Entreprise/update-entreprise/update-entreprise.component';
import { TacheListComponent } from './Components/Media/tache-list/tache-list.component';
import { CreateTacheComponent } from './Components/Media/create-tache/create-tache.component';
import { UpdateTacheComponent } from './Components/Media/update-tache/update-tache.component';
import { PackListComponent } from './Components/Sponsoring/Packs/pack-list/pack-list.component';
import { CreatePackComponent } from './Components/Sponsoring/Packs/create-pack/create-pack.component';

import { CreateProcessusComponent } from './Components/Processus et Gestion dequipe/Processus/create-processus/create-processus.component';
import { UpdatePackComponent } from './Components/Sponsoring/Packs/update-pack/update-pack.component';
import { CalendarComponent } from './calendar/calendar.component';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'logistique-main',component:LogistiqueMainComponent },
  {path:'sponsoring-main',component:SponsoringMainComponent },
  {path:'media-main',component:MediaMainComponent },
  {path:'gestion-equipe-et-processus',component:ProcessusGestionEquipeMainComponent,},
  {path:'main',component:MainComponent},
  /* Formateuuuur */ 
  {path:'formateurs',component: FormateurListComponent},
  {path:'create-formateur',component:CreateFormateurComponent},
  {path:'update-formateur/:id',component:UpdateFormateurComponent },
    /* Subvention */ 
   {path:'subventions',component:SubventionListComponent},
   {path:'create-subvention',component:CreateSubventionComponent}, 
   {path:'update-subvention/:id',component:UpdateSubventionComponent},
   /* Intervenant */ 
   {path:'intervenants',component:IntervenentListComponent},
   {path:'create-intervenant',component:CreateIntervenentComponent}, 
   {path:'update-intervenant/:id',component:UpdateIntervenentComponent},
   /* Ocs */ 
   {path:'ocs',component:OcListComponent},
   {path:'create-oc',component:CreateOcComponent}, 
   {path:'update-oc/:id',component:UpdateOcComponent},
   /*Equipe*/ 
   {path:'equipes',component:EquipeListComponent},
   {path:'create-equipe',component:CreateEquipeComponent}, 
   {path:'update-equipe/:id',component:UpdateEquipeComponent},
    /*Processus*/ 
    {path:'processuss',component:ProcessusListComponent},
    {path:'create-processus',component:CreateProcessusComponent}, 
    {path:'update-processus/:id',component:UpdateProcessusComponent},
    /*Entreprise*/ 
    {path:'entreprises',component:EntrepriseListComponent},
    {path:'create-entreprise',component:CreateEntrepriseComponent}, 
    {path:'update-entreprise/:id',component:UpdateEntrepriseComponent},
    /*Taches*/ 
    {path:'taches',component:TacheListComponent},
    {path:'create-tache',component:CreateTacheComponent}, 
    {path:'update-tache/:id',component:UpdateTacheComponent},
     /*Packs*/ 
     {path:'packs',component:PackListComponent},
     {path:'create-pack',component:CreatePackComponent}, 
     {path:'update-pack/:id',component:UpdatePackComponent},
  /* clanedar*/
  {path:'calendar',component:CalendarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 