import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryCardComponent } from '../summary-card/summary-card';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SummaryCardComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class DashboardComponent {
  balance = signal(5000);
  income = signal(8000);
  expenses = signal(3000);
}
