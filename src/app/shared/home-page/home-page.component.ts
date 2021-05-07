import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {CountriesInterface} from '../../core/mocks';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  item?: CountriesInterface;
  filter?: CountriesInterface;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getFilterResponseByName('all', '')
      .subscribe(res => {
        this.item = res;
      });
  }

  addItem(newItem: string): void {
    let path = '';
    if (newItem !== ''){
      path = 'name/';
    } else {
      path = 'all';
    }
    this.searchService.getFilterResponseByName(path, newItem)
      .subscribe(res => {
        this.item = res;
      });

  }

  addFilter(newItem: string): void {
    let path = '';
    if (newItem !== ''){
      path = 'region/';
    } else {
      path = 'all';
    }
    this.searchService.getFilterResponseByName(path, newItem)
      .subscribe(res => {
        this.item = res;
      });

  }

}
