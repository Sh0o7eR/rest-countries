import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SearchService} from '../../core/services/search.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() eventFilter = new EventEmitter<string>();
  stringFilter = 'Filter by Region';

  filters: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getRegionCountries()
      .subscribe(filter => this.filters = filter);
  }

  addSelected(value: any): void {
    this.eventFilter.emit(value);
    this.stringFilter = value;
  }
}
