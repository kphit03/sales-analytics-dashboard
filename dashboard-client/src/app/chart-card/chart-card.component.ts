import { Component, Input } from '@angular/core';
import { ChartConfiguration, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chart-card',
  templateUrl: './chart-card.component.html',
  styleUrls: ['./chart-card.component.scss'],
  imports: [CommonModule, NgChartsModule],
})
export class ChartCardComponent {
  //@Input lets parent component pass data into this
  @Input() title!: string;
  @Input() chartType!: ChartType; //ChartType is helper type from chart.js (bar, line, pie, etc.)
  @Input() chartData!: ChartConfiguration['data']; //structure Chart.js expects for rendering charts
  @Input() chartOptions!: ChartConfiguration['options']; //structure Chart.js expects for rendering charts
}
