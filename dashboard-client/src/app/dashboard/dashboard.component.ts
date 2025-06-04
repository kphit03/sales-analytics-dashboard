import { Component } from '@angular/core';
import { KpiCardComponent } from '../kpi-card/kpi-card.component';
import { ChartCardComponent } from '../chart-card/chart-card.component';
import { DateRangeFilterComponent } from '../date-range-filter/date-range-filter.component';
import { OnInit } from '@angular/core';
import { DashboardDataService } from '../services/dashboard-data.service';
import { KpiData } from '../services/dashboard-data.service';
import { catchError, forkJoin } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NoDataMessageComponent } from '../no-data-message/no-data-message.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    KpiCardComponent,
    ChartCardComponent,
    DateRangeFilterComponent,
    CommonModule,
    NoDataMessageComponent,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  loading: boolean = false;
  hasError: boolean = false;

  constructor(private dashboardDataService: DashboardDataService) {} //dependency injection (similar to java tbh)

  // properties to store fetched values
  summaryStats: KpiData | null = null;
  salesLineChart: any = null;
  salesByRegionChart: any = null;
  topProductsChart: any = null;

  //date range filter logic
  onDateRangeChange(range: { start: string; end: string }) {
    this.fetchDashboardData(range.start, range.end);
    // Later: this.salesService.getSales(range.start, range.end).subscribe(...)
  }

  ngOnInit() {
    const today = new Date().toISOString().split('T')[0];
    this.fetchDashboardData(today, today); //single day view default
  }

  fetchDashboardData(start: string, end: string) {
    this.loading = true; //loading while fetching data, show spinner
    this.hasError = false;

    const kpi$ = this.dashboardDataService.getKpisByDateRange(start, end); //to hold observable
    const charts$ = this.dashboardDataService.getChartsByDateRange(start, end); //to hold observable

    forkJoin([kpi$, charts$]).subscribe(([kpiData, chartData]) => {
      if (!kpiData || !chartData) {
        this.hasError = true;
        this.loading = false;
        return;
      }
      //forkJoin takes multiple observables and waits for them to complete (when both KPI and chart data ready, show both results in single callback)
      this.summaryStats = kpiData;
      this.salesLineChart = chartData.lineChart;
      this.salesByRegionChart = chartData.pieChart;
      this.topProductsChart = chartData.barChart;

      // simulate empty state
      // this.summaryStats = null as any; // or undefined
      // this.salesLineChart = null;
      // this.salesByRegionChart = null;
      // this.topProductsChart = null;
      this.loading = false; // done loading after both are finished
    });
  }
}
