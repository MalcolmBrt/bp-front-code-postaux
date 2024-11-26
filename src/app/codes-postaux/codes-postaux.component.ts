import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { CodePostauxService } from '../code-postaux.service';
import { CodePostal } from '../code-postal';
import { BoiteInfosComponent } from '../boite-infos/boite-infos.component';

@Component({
  selector: 'app-codes-postaux',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    BoiteInfosComponent,
  ],
  templateUrl: './codes-postaux.component.html',
  styleUrl: './codes-postaux.component.css',
})
export class CodesPostauxComponent {
  readonly formGroupCommune = new FormGroup({
    nomCommune: new FormControl('', [Validators.required]),
  });
  private codePostauxService = inject(CodePostauxService);
  codesPostauxJson: CodePostal[] = [];

  search(): void {
    const nomCommune = this.formGroupCommune.value.nomCommune!; // est forcément non null
    this.codePostauxService.getCodesPostaux(nomCommune).subscribe({
      next: (data) => {
        this.codesPostauxJson = data;
      },
      error: (err) => {
        this.codesPostauxJson = [];
        if (err.status === 404) {
          this.formGroupCommune.controls.nomCommune.setErrors({
            notfound: true,
          });
        } else {
          this.formGroupCommune.controls.nomCommune.setErrors({
            network: true,
          });
        }
      },
    });
  }
}
