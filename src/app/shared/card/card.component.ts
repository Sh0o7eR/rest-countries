import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../core/services/search.service';


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

}
