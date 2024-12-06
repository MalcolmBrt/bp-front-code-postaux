import { Component } from '@angular/core';
import { CodesPostauxComponent } from '../codes-postaux/v1/codes-postaux.component';
import { BoitesPostalesComponent } from '../boites-postales/v1/boites-postales.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-v1',
  standalone: true,
  imports: [CodesPostauxComponent, BoitesPostalesComponent, MatRadioModule, FormsModule],
  templateUrl: './v1.component.html',
  styleUrl: './v1.component.scss'
})
export class V1Component {
  choixRecherche = 'CodePostal';

}
