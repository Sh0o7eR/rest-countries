import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../core/services/search.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  details: any = [];
  borders: any = [];
  provaId = this.route.snapshot.paramMap.get('name');
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    this.searchService.getDetailsCountries(name)
      .subscribe(res => {
        this.details = res;
      });
  }

}
