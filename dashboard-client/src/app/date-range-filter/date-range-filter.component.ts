import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms'; //required for ngModel
@Component({
  selector: 'app-date-range-filter',
  imports: [FormsModule],
  templateUrl: './date-range-filter.component.html',
  styleUrl: './date-range-filter.component.scss',
})
export class DateRangeFilterComponent {
  startDate: string = '';
  endDate: string = '';

  @Output() dateRangeSelected = new EventEmitter<{
    start: string;
    end: string;
  }>();

  submitRange() {
    if (this.startDate && this.endDate) {
      this.dateRangeSelected.emit({ start: this.startDate, end: this.endDate });
    }
  }
}
