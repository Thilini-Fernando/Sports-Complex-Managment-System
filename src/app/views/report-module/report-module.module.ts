import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportModuleRoutingModule } from './report-module-routing.module';
import { ReportGenerateComponent } from './report-generate/report-generate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ReportGenerateComponent],
  imports: [
    CommonModule,
    ReportModuleRoutingModule,
    ReactiveFormsModule ,
  ]
})
export class ReportModuleModule { }
