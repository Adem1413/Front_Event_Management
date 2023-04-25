import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-media-main',
  templateUrl: './media-main.component.html',
  styleUrls: ['./media-main.component.css']
})
export class MediaMainComponent {
  constructor(private router:Router){}

  goToTaches(){
    this.router.navigate(["/taches"])
  }
}
