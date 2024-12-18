import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CodesPostauxService } from './codes-postaux.service';
import { CodePostal } from '../shared/code-postal';
import { BoiteInfosComponent } from '../../boite-infos/boite-infos.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-codes-postaux',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BoiteInfosComponent,
    MatProgressBarModule,
  ],
  templateUrl: './codes-postaux.component.html',
  styleUrl: '../shared/codes-postaux.component.scss',
})
export class CodesPostauxComponent {
  readonly searchCommuneForm = new FormGroup({
    nomCommune: new FormControl('', [Validators.required]),
  });
  private codesPostauxService = inject(CodesPostauxService);
  codesPostauxJson: CodePostal[] = [];
  hasFoundResults = false;
  isLoading = false;
  previousValue = "";

  search(): void {
    const nomCommuneValue = this.searchCommuneForm.value.nomCommune!; // est forcément non null
    if (nomCommuneValue !== this.previousValue) {
      this.isLoading = true;
      const params = {
        nomCommune: nomCommuneValue
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
          this.searchCommuneForm.controls.nomCommune.setErrors({[errorType]: true})
        },
      });
      this.previousValue = nomCommuneValue;
    }
  }

  showNumberOfCPsFound(): string {
    if (this.codesPostauxJson.length === 1) {
      return `${this.codesPostauxJson.length} code postal trouvé.`
    } else {
      return `${this.codesPostauxJson.length} codes postaux trouvés.`
    }
  }
}
