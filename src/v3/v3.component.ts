import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { CodesPostauxComponent } from '../codes-postaux/v3/codes-postaux.component';
import { BoitesPostalesComponent } from '../boites-postales/v3/boites-postales.component';

@Component({
  selector: 'app-v3',
  standalone: true,
  imports: [CodesPostauxComponent, BoitesPostalesComponent, MatRadioModule, FormsModule],
  templateUrl: './v3.component.html',
  styleUrl: './v3.component.scss'
})
export class V3Component {
  choixRecherche = 'CodePostal';


}
