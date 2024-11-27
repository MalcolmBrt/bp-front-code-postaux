import { Component } from '@angular/core';
import { CodesPostauxComponent } from '../codes-postaux/codes-postaux.component';
import { BoitesPostalesComponent } from '../boites-postales/boites-postales.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CodesPostauxComponent, BoitesPostalesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bp-front-code-postaux';
}
