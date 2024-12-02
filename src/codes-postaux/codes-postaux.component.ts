import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CodesPostauxService } from './codes-postaux.service';
import { CodePostal } from './code-postal';
import { BoiteInfosComponent } from '../boite-infos/boite-infos.component';

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
  ],
  templateUrl: './codes-postaux.component.html',
  styleUrl: './codes-postaux.component.scss',
})
export class CodesPostauxComponent {
  readonly searchCommuneForm = new FormGroup({
    nomCommune: new FormControl('', [Validators.required]),
  });
  private codesPostauxService = inject(CodesPostauxService);
  codesPostauxJson: CodePostal[] = [];

  hasFoundResults = false;

  previousValue = "";

  search(): void {
    const nomCommuneValue = this.searchCommuneForm.value.nomCommune!; // est forcément non null
    if (nomCommuneValue !== this.previousValue) {
      const params = {
        nomCommune: nomCommuneValue
      };
      this.codesPostauxService.getCodesPostaux(params).subscribe({
        next: (data) => {
          this.codesPostauxJson = data;
          this.hasFoundResults = true;
        },
        error: (err) => {
          this.codesPostauxJson = [];
          this.hasFoundResults = false;
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
