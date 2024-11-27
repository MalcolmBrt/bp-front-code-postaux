import { Component } from '@angular/core';
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

@Component({
  selector: 'app-boites-postales',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './boites-postales.component.html',
  styleUrl: './boites-postales.component.scss',
})
export class BoitesPostalesComponent {
  numberValidator(control: FormControl) {
    if (isNaN(control?.value)) {
      return {
        number: true,
      };
    }
    return null;
  }
  readonly searchBPForm = new FormGroup({
    numeroBP: new FormControl('', [
      Validators.required,
      Validators.pattern('^[0-9]*$'),
    ]),
  });
}
