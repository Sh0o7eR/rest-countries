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
  dark = false;

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
  onToggle(): void{
    this.dark = !this.dark;
    console.log(this.dark);
  }
  darkMode(): void {
    const el = document.body;
    const card = document.querySelectorAll('.container-total__card');
    // const filter = document.querySelector('.conteiner-home__box__search__filter');
    const textNav = document.querySelector('.textNav');
    const titleNav = document.querySelector('.titleNav');
    const nav = document.querySelector('.navbar');
    const pageDetails = document.querySelector('.container-details__box__details-box__desc');
    const pageDetailsUnsplash = document.querySelectorAll('.container-gallery');
    el.classList.toggle('bcDark');
    // el.classList.toggle('cDark');
    // filter.classList.toggle('filterDark');
    card.forEach(element => {
      element.classList.toggle('cardDark');
    });
    textNav.classList.toggle('textWhite');
    titleNav.classList.toggle('textWhite');
    pageDetails.classList.toggle('textWhite');
    pageDetailsUnsplash.forEach(element => {
          element.classList.toggle('textWhite');
      });
    nav.classList.toggle('shadowDark');
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
