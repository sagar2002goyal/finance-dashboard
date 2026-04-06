import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard';
import { SummaryCardComponent } from './summary-card/summary-card';
import { DashboardRoutingModule } from './dashboard-routing-module';

@NgModule({
  declarations: [
    DashboardComponent,
    SummaryCardComponent
  ],
  imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
