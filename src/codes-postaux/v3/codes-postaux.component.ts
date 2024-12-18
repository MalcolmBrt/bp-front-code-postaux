import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CodesPostauxService } from './codes-postaux.service';
import { CommunesService } from './communes.service';
import { CodePostal } from './code-postal';
import { ResultatCpComponent } from "../../resultat-cp/resultat-cp.component";
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-codes-postaux',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    ResultatCpComponent,
    MatProgressBarModule,
    MatAutocompleteModule,
    AsyncPipe,
],
  templateUrl: './codes-postaux.component.html',
  styleUrl: '../shared/codes-postaux.component.scss',
})
export class CodesPostauxComponent implements OnInit {
  readonly searchCommuneForm = new FormGroup({
    nomCommune: new FormControl('', [Validators.required]),
  });
  private codesPostauxService = inject(CodesPostauxService);
  private communesService = inject(CommunesService);
  codesPostauxJson: CodePostal[] = [];
  hasFoundResults = false;
  isLoading = false;
  previousValue = '';
  communes: string[] = [];
  filteredCommunes!: Observable<string[]>;

  ngOnInit() {
    this.getCommunes();
  }

  search(): void {
    const nomCommuneValue = this.searchCommuneForm.value.nomCommune!; // est forcément non null
    if (nomCommuneValue !== this.previousValue) {
      this.isLoading = true;
      const params = {
        query: nomCommuneValue,
      };
      this.codesPostauxService.getCodesPostaux(params).subscribe({
        next: (data) => {
          this.codesPostauxJson = data;
          this.hasFoundResults = true;
          this.isLoading = false;
        },
        error: (err) => {
          this.codesPostauxJson = [];
          this.hasFoundResults = false;
          this.isLoading = false;
          const errorType = err.status === 404 ? 'notfound' : 'network';
          this.searchCommuneForm.controls.nomCommune.setErrors({
            [errorType]: true,
          });
        },
      });
      this.previousValue = nomCommuneValue;
    }
  }

  showNumberOfCPsFound(): string {
    if (this.codesPostauxJson.length === 1) {
      return `${this.codesPostauxJson.length} code postal trouvé.`;
    } else {
      return `${this.codesPostauxJson.length} codes postaux trouvés.`;
    }
  }

  getCommunes(): void {
    this.communesService.getCommunes().subscribe({
      next: (data) => {
        this.communes = data;
        this.filteredCommunes =
          this.searchCommuneForm.controls.nomCommune.valueChanges.pipe(
            startWith(''),
            map((value) => this._filter(value || ''))
          );
      },
      error: (err) => {
        this.communes = [];
        this.searchCommuneForm.controls.nomCommune.setErrors({ network: true });
      },
    });
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.communes.filter((option) =>
      option.toLowerCase().includes(filterValue)
    );
  }
}
