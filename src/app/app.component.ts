import { Component } from '@angular/core';
import { CodesPostauxComponent } from '../codes-postaux/codes-postaux.component';
import { BoitesPostalesComponent } from '../boites-postales/boites-postales.component';
import { MatRadioModule } from '@angular/material/radio';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CodesPostauxComponent, BoitesPostalesComponent, MatRadioModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bp-front-code-postaux';
  choixRecherche = 'CodePostal';
}
