import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormateurListComponent } from './Components/Logistique/Formateur/formateur-list/formateur-list.component';
import {HttpClientModule} from '@angular/common/http';
import { CreateFormateurComponent } from './Components/Logistique/Formateur/create-formateur/create-formateur.component'
import { FormsModule } from '@angular/forms';
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
import { UpdateOcComponent } from './Components/Processus et Gestion dequipe/Ocs/update-oc/update-oc.component';
import { CreateOcComponent } from './Components/Processus et Gestion dequipe/Ocs/create-oc/create-oc.component';
import { EquipeListComponent } from './Components/Processus et Gestion dequipe/Equipe/equipe-list/equipe-list.component';
import { CreateEquipeComponent } from './Components/Processus et Gestion dequipe/Equipe/create-equipe/create-equipe.component';
import { UpdateEquipeComponent } from './Components/Processus et Gestion dequipe/Equipe/update-equipe/update-equipe.component';
import { UpdateProcessusComponent } from './Components/Processus et Gestion dequipe/Processus/update-processus/update-processus.component';
import { CreateProcessusComponent } from './Components/Processus et Gestion dequipe/Processus/create-processus/create-processus.component';
import { ProcessusListComponent } from './Components/Processus et Gestion dequipe/Processus/processus-list/processus-list.component';
import { EntrepriseListComponent } from './Components/Sponsoring/Entreprise/entreprise-list/entreprise-list.component';
import { CreateEntrepriseComponent } from './Components/Sponsoring/Entreprise/create-entreprise/create-entreprise.component';
import { UpdateEntrepriseComponent } from './Components/Sponsoring/Entreprise/update-entreprise/update-entreprise.component';
import { TacheListComponent } from './Components/Media/tache-list/tache-list.component';
import { CreateTacheComponent } from './Components/Media/create-tache/create-tache.component';
import { UpdateTacheComponent } from './Components/Media/update-tache/update-tache.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { PackListComponent } from './Components/Sponsoring/Packs/pack-list/pack-list.component';
import { CreatePackComponent } from './Components/Sponsoring/Packs/create-pack/create-pack.component';
import { UpdatePackComponent } from './Components/Sponsoring/Packs/update-pack/update-pack.component';
import { CommonModule, NgFor } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CalendarComponent } from './calendar/calendar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { LoginComponent } from './login/login.component';
import { MainComponent } from './main/main.component';@NgModule({
  declarations: [
    AppComponent,
    FormateurListComponent,
    CreateFormateurComponent,
    UpdateFormateurComponent,
    LogistiqueMainComponent,
    SponsoringMainComponent,
    MediaMainComponent,
    SubventionListComponent,
    CreateSubventionComponent,
    UpdateSubventionComponent,
    IntervenentListComponent,
    CreateIntervenentComponent,
    UpdateIntervenentComponent,
    ProcessusGestionEquipeMainComponent,
    OcListComponent,
    UpdateOcComponent,
    CreateOcComponent,
    EquipeListComponent,
    CreateEquipeComponent,
    UpdateEquipeComponent,
    UpdateProcessusComponent,
    CreateProcessusComponent,
    ProcessusListComponent,
    EntrepriseListComponent,
    CreateEntrepriseComponent,
    UpdateEntrepriseComponent,
    TacheListComponent,
    CreateTacheComponent,
    UpdateTacheComponent,
    PackListComponent,
    CreatePackComponent,
    UpdatePackComponent,
    CalendarComponent,
    LoginComponent,
    MainComponent,
   
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgbModalModule,
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgFor,
    CarouselModule.forRoot(), BsDropdownModule.forRoot(),
   
  ],
  providers: [],
  bootstrap: [AppComponent],
 
})
export class AppModule { }
