import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CodesPostauxComponent } from '../codes-postaux/v2/codes-postaux.component';
import { BoitesPostalesComponent } from '../boites-postales/v1/boites-postales.component';
@Component({
  selector: 'app-v2',
  standalone: true,
  imports: [CodesPostauxComponent, BoitesPostalesComponent, MatRadioModule, FormsModule],
  templateUrl: './v2.component.html',
  styleUrl: './v2.component.scss'
})
export class V2Component {
  choixRecherche = 'CodePostal';


}
