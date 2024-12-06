import { Component, Input } from '@angular/core';
import { CodePostal } from '../../codes-postaux/v1/code-postal';
import { BoitePostale } from '../../boites-postales/v1/boite-postale';

@Component({
  selector: 'app-boite-infos',
  standalone: true,
  imports: [],
  templateUrl: './boite-infos.component.html',
  styleUrl: './boite-infos.component.scss',
})
export class BoiteInfosComponent {
  @Input() type!: string;
  @Input() titre!: string;
  @Input() details!: any;
}
