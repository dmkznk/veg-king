import {Component, OnInit} from '@angular/core';
import {Review} from '../../interfaces/interfaces';
import {reviews} from './reviews-data';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviews: Array<Review>;

  constructor() { }

  ngOnInit(): void {
    this.reviews = reviews;
  }

  public cutText(text: string): string {
    if (text) {
      return text.length > 50
        ? text.slice(0, 50) + '...'
        : text;
    }
  }
}
