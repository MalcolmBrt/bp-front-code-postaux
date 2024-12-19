import { Component, Input } from '@angular/core';
import { CodePostal } from '../codes-postaux/v3/code-postal';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-resultat-cp',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './resultat-cp.component.html',
  styleUrl: './resultat-cp.component.scss',
})
export class ResultatCpComponent {
  @Input() codePostal!: CodePostal;
}
