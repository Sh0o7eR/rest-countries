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
  onToggle(): void {
    const el = document.body;
    const card = document.querySelectorAll('.container-total__card');
    const filter = document.querySelector('.conteiner-home__box__search__filter');
    el.classList.toggle('bcDark');
    el.classList.toggle('cDark');
    filter.classList.toggle('filterDark');
    card.forEach(element => {
        element.classList.toggle('cardDark');
    });
  }

  // changeColor(): void{
  //   const btnBack = document.querySelector('.btn-back');
  //   const btnC = document.querySelectorAll('.btn-countries');
  //   const cardUnsplash = document.querySelector('.container-gallery__image');
  //
  //   btnBack.classList.toggle('cardDark');
  //   cardUnsplash.classList.toggle('cardDark');
  //
  //   btnC.forEach(element => {
  //     element.classList.toggle('cardDark');
  //   });
  //   btnC.forEach(el => {
  //     el.classList.toggle('buttonDark');
  //   });
  // }
}
