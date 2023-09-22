import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgChartsModule, ThemeService } from 'ng2-charts';
import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgChartsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [
    ThemeService
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent
  ],
})
export class PagesModule {}
