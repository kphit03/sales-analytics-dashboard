import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeFilterComponent } from './date-range-filter.component';

describe('DateRangeFilterComponent', () => {
  let component: DateRangeFilterComponent;
  let fixture: ComponentFixture<DateRangeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateRangeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateRangeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
