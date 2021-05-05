import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  bole: boolean;
  icona = 'moon';
  testo = 'Dark Mode';
  constructor() { }

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
}
