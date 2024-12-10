import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [NavbarComponent, RouterOutlet, MatIconModule, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'bp-front-code-postaux';
  isDarkMode = localStorage.getItem('darkmode') === 'active';

  ngOnInit(): void {
    this.isDarkMode ? this.enableDarkMode() : this.disableDarkMode();
  }

  disableDarkMode(): void {
    document.body.classList.remove('darkmode');
    localStorage.removeItem('darkmode');
  }

  enableDarkMode(): void {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkmode', 'active');
  }

  changeTheme(): void {
    this.isDarkMode ? this.disableDarkMode() : this.enableDarkMode();
    this.isDarkMode = !this.isDarkMode;
  }
}
