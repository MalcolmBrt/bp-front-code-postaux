import { ChangeDetectorRef, Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { ResultatBpComponent } from '../../resultat-bp/resultat-bp.component';
import { BoitesPostalesService } from './boites-postales.service';
import { BoitePostale } from './boite-postale';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boites-postales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ResultatBpComponent,
    MatPaginatorModule,
    MatProgressBarModule,
    CommonModule,
  ],
  templateUrl: './boites-postales.component.html',
  styleUrl: './boites-postales.component.scss',
})
export class BoitesPostalesComponent implements OnInit {
  readonly searchBPForm = new FormGroup({
    numeroBP: new FormControl('', [Validators.required]),
  });
  private boitesPostalesService = inject(BoitesPostalesService);
  private breakpointObserver = inject(BreakpointObserver);
  private cdref = inject(ChangeDetectorRef);

  boitesPostalesJson: BoitePostale[] = [];
  hasFoundResults = false;
  isLoading = false;
  previousValue = '';
  length = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50];
  isMobile = false;

  @ViewChild('autoFocusInput') autoFocusInput!: ElementRef;
  

  ngOnInit(): void {
    this.breakpointObserver
    .observe([Breakpoints.Handset])
    .subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  ngAfterViewInit(): void {
    // Mettre le focus sur l'élément dès que le composant est chargé
    this.autoFocusInput.nativeElement.focus();
    this.cdref.detectChanges();
  }

  getBoitesPostales(): void {
    const numeroBP = this.searchBPForm.value.numeroBP!; // numeroBP est forcément non null
    const params = {
      query: numeroBP,
      pageNo: this.pageIndex,
      pageSize: this.pageSize,
    };
    this.boitesPostalesService.getBoitesPostales(params).subscribe({
      next: (data) => {
        this.boitesPostalesJson = data.content;
        this.length = data.totalElements;
        this.hasFoundResults = true;
        this.isLoading = false;
      },
      error: (err) => {
        this.boitesPostalesJson = [];
        this.hasFoundResults = false;
        this.isLoading = false;
        const errorType = err.status === 404 ? 'notfound' : 'network';
        this.searchBPForm.controls.numeroBP.setErrors({ [errorType]: true });
      },
    });
  }

  search(): void {
    const numBPValue = this.searchBPForm.value.numeroBP!; // est forcément non null
    if (numBPValue != this.previousValue) {
      this.isLoading = true;
      this.pageIndex = 0;
      this.pageSize = 10;
      this.getBoitesPostales();
      this.previousValue = numBPValue;
    }
  }

  isInvalid(): boolean {
    return (
      this.searchBPForm.controls.numeroBP.hasError('required') ||
      this.searchBPForm.controls.numeroBP.hasError('pattern')
    );
  }

  handlePageEvent(e: PageEvent) {
    this.length = e.length;
    this.pageIndex = e.pageIndex;
    this.pageSize = e.pageSize;
    this.getBoitesPostales();
  }

  showNumberOfBPsFound(): string {
    if (this.length === 1) {
      return `${this.length} boîte postale trouvée.`;
    } else {
      return `${this.length} boîtes postales trouvées.`;
    }
  }
}
