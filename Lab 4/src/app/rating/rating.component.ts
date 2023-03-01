import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss']
})
export class RatingComponent {
  @Input()
  rating!: number;

  getRating(rating: number) {
    const widths = Array(Math.ceil(rating)).fill(100);
    if (rating % 1 !== 0)
      widths[widths.length - 1] = Math.round(
        (rating - Math.floor(rating)) * 100
      );
    return widths;
  }
}
