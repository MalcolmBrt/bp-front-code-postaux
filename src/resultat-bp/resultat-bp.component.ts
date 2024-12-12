import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';

@Component({
  selector: 'app-resultat-bp',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './resultat-bp.component.html',
  styleUrl: './resultat-bp.component.scss',
})
export class ResultatBpComponent {
  @Input() agence!: string;
  @Input() numeroBP!: number;
  @Input() codePostal!: number;
  @Input() localite!: string;

  private clipboard = inject(Clipboard)
  
  copier(infos: HTMLElement): void {
    this.clipboard.copy(infos.innerText)
  }
}
