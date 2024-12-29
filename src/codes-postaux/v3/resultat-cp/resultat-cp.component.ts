import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Input,
} from '@angular/core';
import { CodePostal } from '../code-postal';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-resultat-cp',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatDialogModule, CommonModule],
  templateUrl: './resultat-cp.component.html',
  styleUrl: './resultat-cp.component.scss',
})
export class ResultatCpComponent {
  @Input() codePostal!: CodePostal;
  isMobile = false;
  private breakpointObserver = inject(BreakpointObserver);
  readonly dialog = inject(MatDialog);

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.HandsetPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }

  ouvrirIntervalles() {
    const dialogRef = this.dialog.open(ResultatCpDialog, {
      data: {
        code: this.codePostal.code,
        intervalles: this.codePostal.intervalles,
      },
    });
  }
}

@Component({
  selector: 'app-resultat-cp-dialog',
  templateUrl: 'app-resultat-cp-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatTableModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResultatCpDialog {
  displayedColumns: string[] = ['debut', 'fin'];
  data = inject(MAT_DIALOG_DATA);
}
