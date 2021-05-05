import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {CountriesInterface} from '../../core/mocks';

interface Card {
  flag: string;
  name: string;
  population: string;
  region: string;
  capital: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  cards: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getAllCountries().subscribe(
      res => {
        this.cards = res;
      }
    );
  }


  private makeCard(countriesInterface: CountriesInterface){
    return {
      flag: countriesInterface.flag,
      name: countriesInterface.name,
      population: countriesInterface.population,
      region: countriesInterface.region,
      capital: countriesInterface.capital
    };
  }

}
