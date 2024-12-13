import { Component, inject, Input, OnInit } from '@angular/core';
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
export class ResultatBpComponent implements OnInit {
  @Input() agence!: string;
  @Input() numeroBP!: string;
  @Input() codePostal!: number;
  @Input() localite!: string;

  private clipboard = inject(Clipboard);

  ngOnInit(): void {
    this.numeroBP = this.numeroBP.replace(/^0+/, '');
  }

  copier(infos: HTMLElement): void {
    this.clipboard.copy(infos.innerText);
  }
}
