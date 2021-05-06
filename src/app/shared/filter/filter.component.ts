import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../core/services/search.service';


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  filters: any = [];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
    this.searchService.getRegionCountries()
      .subscribe(filter => this.filters = filter);
  }
}
