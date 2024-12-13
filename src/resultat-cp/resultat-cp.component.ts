import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultat-cp',
  standalone: true,
  imports: [],
  templateUrl: './resultat-cp.component.html',
  styleUrl: './resultat-cp.component.scss',
})
export class ResultatCpComponent {
  @Input() localite!: string;
  @Input() code!: number;
}
