import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';

export interface KpiData {
  totalRevenue: number;
  topProduct: string;
  topRegion: string;
  totalSales: number;
}

export interface ChartData {
  lineChart: any;
  pieChart: any;
  barChart: any;
}

@Injectable({
  providedIn: 'root',
})
export class DashboardDataService {
  constructor() {}

  getKpisByDateRange(start: string, end: string): Observable<KpiData | null> {
    //temp, hardcoded data
    return of({
      totalRevenue: 400423,
      topProduct: 'Headphones',
      topRegion: 'North America',
      totalSales: 2389,
    }).pipe(
      catchError((error) => {
        console.log('Error fetching KPI data: ', error);
        return of(null);
      })
    );
    //.pipe(delay(1000)); (simulate loading)
  }
  getChartsByDateRange(
    start: string,
    end: string
  ): Observable<ChartData | null> {
    return of({
      lineChart: {
        title: 'Sales Over Time',
        type: 'line',
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
            legend: { display: true },
          },
        },
      },
      pieChart: {
        title: 'Sales by Region',
        type: 'pie',
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
            legend: { position: 'bottom' },
          },
        },
      },
      barChart: {
        title: 'Top-Selling Products',
        type: 'bar',
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
            legend: { display: false },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      },
    }).pipe(
      catchError((error) => {
        console.log('Error fetching KPI data: ', error);
        return of(null);
      })
    );
    //.pipe(delay(1000)); (similuate loading)
  }
}
