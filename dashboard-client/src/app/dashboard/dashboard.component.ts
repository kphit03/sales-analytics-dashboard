import { Component } from '@angular/core';
import { KpiCardComponent } from '../kpi-card/kpi-card.component';
import { ChartCardComponent } from '../chart-card/chart-card.component';
import { DateRangeFilterComponent } from '../date-range-filter/date-range-filter.component';

@Component({
  selector: 'app-dashboard',
  imports: [KpiCardComponent, ChartCardComponent, DateRangeFilterComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  //date range filter logic
  onDateRangeChange(range: { start: string; end: string }) {
    console.log('Date range selected:', range);
    // Later: this.salesService.getSales(range.start, range.end).subscribe(...)
  }

  summaryStats = {
    totalRevenue: 123456,
    topProduct: 'Headphones',
    topRegion: 'North America',
    totalSales: 2389,
  };
  salesLineChart = {
    title: 'Sales Over Time',
    type: 'line' as const,
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr'],
      datasets: [
        {
          data: [12000, 15000, 18000, 22000],
          label: 'Monthly Sales',
          fill: true,
          tension: 0.4,
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    },
  };
  salesByRegionChart = {
    title: 'Sales by Region',
    type: 'pie' as const,
    data: {
      labels: ['North America', 'Europe', 'Asia', 'South America'],
      datasets: [
        {
          data: [50000, 30000, 20000, 15000],
          backgroundColor: ['#36A2EB', '#FFCE56', '#FF6384', '#4BC0C0'],
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom' as const,
        },
      },
    },
  };
  topProductsChart = {
    title: 'Top-Selling Products',
    type: 'bar' as const,
    data: {
      labels: ['Headphones', 'Keyboard', 'Mouse', 'Monitor'],
      datasets: [
        {
          label: 'Units Sold',
          data: [340, 280, 220, 150],
          backgroundColor: '#36A2EB',
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
}
