import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultat-bp',
  standalone: true,
  imports: [],
  templateUrl: './resultat-bp.component.html',
  styleUrl: './resultat-bp.component.scss',
})
export class ResultatBpComponent {
  @Input() agence!: string;
  @Input() numeroBP!: number;
  @Input() codePostal!: number;
  @Input() localite!: string;
}
