import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportGenerateComponent } from './report-generate/report-generate.component';


const routes: Routes = [

  {
    path: '',
    children:[{
      path:'reportgen',
      component:ReportGenerateComponent
    },
    
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportModuleRoutingModule { }
