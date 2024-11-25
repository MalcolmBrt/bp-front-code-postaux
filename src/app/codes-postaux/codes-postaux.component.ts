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
  ],
  templateUrl: './codes-postaux.component.html',
  styleUrl: './codes-postaux.component.css',
})
export class CodesPostauxComponent {
  readonly formGroupCommune = new FormGroup({
    nomCommune: new FormControl('', [Validators.required]),
  });
  private codePostauxService = inject(CodePostauxService);
  public codesPostauxJson: CodePostal[] = [];

  search(): void {
    const nomCommune = this.formGroupCommune.value.nomCommune!; // est forcément non null
    this.codePostauxService.getCodesPostaux(nomCommune).subscribe({
      next: (data) => (this.codesPostauxJson = data),
      error: (err) => {
        this.codesPostauxJson = [];
        console.error(err);
      },
    });
  }
}
