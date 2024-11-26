import { Component } from '@angular/core';
import { CodesPostauxComponent } from '../codes-postaux/codes-postaux.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CodesPostauxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'bp-front-code-postaux';
}
