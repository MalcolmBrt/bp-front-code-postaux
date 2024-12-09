import { Component, inject } from '@angular/core';
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
import { BoiteInfosComponent } from '../../boite-infos/v1/boite-infos.component';
import { BoitesPostalesService } from '../shared/boites-postales.service';
import { BoitePostale } from '../shared/boite-postale';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-boites-postales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BoiteInfosComponent,
    MatPaginatorModule,
    MatProgressBarModule,
  ],
  templateUrl: './boites-postales.component.html',
  styleUrl: '../shared/boites-postales.component.scss',
})
export class BoitesPostalesComponent {
  readonly searchBPForm = new FormGroup({
    numeroBP: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
  private boitesPostalesService = inject(BoitesPostalesService);
  boitesPostalesJson: BoitePostale[] = [];

  hasFoundResults = false;
  isLoading = false;

  length = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50];

  previousValue = '';

  getBoitesPostales(): void {
    const params = {
      numeroBP: this.searchBPForm.value.numeroBP!, // numeroBP est forcément non null
      pageNo: this.pageIndex,
      pageSize: this.pageSize,
    };
    this.boitesPostalesService.getBoitesPostales(params).subscribe({
      next: (data) => {
        // Ajout manuel du numeroBP dans chaque objet de data.content
        this.boitesPostalesJson = data.content.map((bp: any) => ({
          numeroBP: params.numeroBP, // Ajout du numéro BP
          ...bp,
        }));
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
