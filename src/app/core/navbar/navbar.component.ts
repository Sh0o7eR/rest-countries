import { Component, OnInit } from '@angular/core';
import {DarkModeService} from 'angular-dark-mode';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bole: boolean;
  icona = 'moon';
  testo = 'Dark Mode';

  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
  }
  icon = () => {
    this.bole = !this.bole;
    if (!this.bole) {
      this.testo = 'Light Mode';
      return this.icona = 'sun';
    } else {
      this.testo = 'Dark Mode';
      return this.icona = 'moon';
    }
  }
  onToggle(): void {
    this.darkModeService.toggle();
  }
}
