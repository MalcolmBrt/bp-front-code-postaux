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
import { BoiteInfosComponent } from '../boite-infos/boite-infos.component';
import { BoitesPostalesService } from './boites-postales.service';
import { BoitePostale } from './boite-postale';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

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
  ],
  templateUrl: './boites-postales.component.html',
  styleUrl: './boites-postales.component.scss',
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

  isSubmitted = false;
  length = 0;
  pageIndex = 0;
  pageSize = 10;
  pageSizeOptions = [10, 25, 50];

  getBoitesPostales(): void {
    const params = {
      numeroBP: this.searchBPForm.controls.numeroBP.value!, // numeroBP est forcément non null
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
      },
      error: (err) => {
        this.boitesPostalesJson = [];
        this.isSubmitted = false;
        if (err.status === 404) {
          this.searchBPForm.controls.numeroBP.setErrors({
            notfound: true,
          });
        } else {
          this.searchBPForm.controls.numeroBP.setErrors({
            network: true,
          });
        }
      },
    });
  }

  search(): void {
    this.isSubmitted = true;
    this.pageIndex = 0;
    this.pageSize = 10;
    this.getBoitesPostales();
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
      return `${this.length} boîte postale trouvée.`
    } else {
      return `${this.length} boîtes postales trouvées.`
    }
  }
}
