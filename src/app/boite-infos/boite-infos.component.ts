import { Component, Input } from '@angular/core';
import { CodePostal } from '../code-postal';

@Component({
  selector: 'app-boite-infos',
  standalone: true,
  imports: [],
  templateUrl: './boite-infos.component.html',
  styleUrl: './boite-infos.component.css',
})
export class BoiteInfosComponent {
  @Input() titre!: string;
  @Input() details!: CodePostal;

  isCodePostal(details: CodePostal): details is CodePostal {
    return (details as CodePostal).nomCommune !== undefined;
  }
}
