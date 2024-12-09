import { Component, Input } from '@angular/core';

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
