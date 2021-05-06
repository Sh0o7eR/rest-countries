import { Component, OnInit } from '@angular/core';
import {UnsplashService} from '../../../core/services/unsplash.service';
import {ActivatedRoute} from '@angular/router';
import {Result} from '../../../core/unsplash.interface';

interface Sezione {
  image: string;
  imageUser: string;
  nameUser: string;
  portfolio: string;
  bio: string;
}

@Component({
  selector: 'app-unsplash',
  templateUrl: './unsplash.component.html',
  styleUrls: ['./unsplash.component.scss']
})
export class UnsplashComponent implements OnInit {
  section: Sezione[] = [];
  constructor(private route: ActivatedRoute, private unsplashService: UnsplashService) { }

  ngOnInit(): void {
    const query = this.route.snapshot.paramMap.get('name');

    this.unsplashService.getUnsplash(query)
      .subscribe(res => {
        this.section = res.results.map(this.makeDetailsUnsplash);
      });
  }

  makeDetailsUnsplash(details: Result): any{
    return {
      image: details.urls.small,
      imageUser: details.user.profile_image.medium,
      nameUser: details.user.name,
      portfolio: details.user.portfolio_url,
      bio: details.user.bio
    };
  }

}
