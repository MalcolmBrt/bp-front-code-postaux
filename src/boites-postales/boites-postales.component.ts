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

  search(): void {
    const params = {
      numeroBP: this.searchBPForm.value.numeroBP!, // est forcément non null
      pageNo: 0,
      pageSize: 10,
    };
    this.boitesPostalesService.getBoitesPostales(params).subscribe({
      next: (data) => {
        // Ajout manuel du numeroBP dans chaque objet de data.content
        this.boitesPostalesJson = data.content.map((bp: any) => ({
          numeroBP: params.numeroBP, // Ajout du numéro BP
          ...bp,
        }));
      },
      error: (err) => {
        this.boitesPostalesJson = [];
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
}
