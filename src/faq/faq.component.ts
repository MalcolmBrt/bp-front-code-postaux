import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [MatToolbarModule, MatExpansionModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  @Input()
  question!: string;

  @Input()
  reponse!: string;
}
