import {Component, OnInit} from '@angular/core';
import {ReviewInterface} from '../../interfaces/interfaces';
import {reviews} from '../../data-static/reviews-data';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {

  public reviews: Array<ReviewInterface>;

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
