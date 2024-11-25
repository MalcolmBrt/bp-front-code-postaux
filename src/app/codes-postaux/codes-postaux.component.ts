import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-codes-postaux',
  standalone: true,
  imports: [
    ReactiveFormsModule,
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

  search(): void {
    const nonCommune = this.formGroupCommune.value;
    console.log(nonCommune);
  }
}
