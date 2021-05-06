import {Component, Input, OnInit} from '@angular/core';
import {SearchService} from '../../core/services/search.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() cards = [];
  path: string;
  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    // this.searchService.getAllCountries().subscribe(
    //   res => {
    //     this.cards = res;
    //   }
    // );
    // this.query = '';

  }


}
