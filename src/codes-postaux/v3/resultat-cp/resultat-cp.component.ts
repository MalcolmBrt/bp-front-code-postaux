import { Component, inject, Input, OnInit } from '@angular/core';
import { CodePostal } from '../code-postal';
import { MatIconModule } from '@angular/material/icon';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-resultat-cp',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './resultat-cp.component.html',
  styleUrl: './resultat-cp.component.scss',
})
export class ResultatCpComponent implements OnInit {
  @Input() codePostal!: CodePostal;

  isMobile = false;

  private breakpointObserver = inject(BreakpointObserver);

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }
}
