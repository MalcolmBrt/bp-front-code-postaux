import { Component, inject, Input, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Clipboard } from '@angular/cdk/clipboard';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { BoitePostale } from '../boite-postale';


@Component({
  selector: 'app-resultat-bp',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './resultat-bp.component.html',
  styleUrl: './resultat-bp.component.scss',
})
export class ResultatBpComponent implements OnInit {
  @Input() boitePostale!: BoitePostale;

  isMobile = false;

  private clipboard = inject(Clipboard);
  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  copier(infos: HTMLElement): void {
    this.clipboard.copy(infos.innerText);
  }
}
