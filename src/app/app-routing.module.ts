<<<<<<< HEAD
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'patient', component: PatientComponent },
=======
import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { AppComponent } from '../app/app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRecordComponent } from './main/add-record/add-record.component';
import { ViewRecordComponent } from './main/view-record/view-record.component';
import { ActivateRecordComponent } from './main/activate-record/activate-record.component';
import { DeactivateRecordComponent } from './main/deactivate-record/deactivate-record.component';
import { GenerateReportComponent } from './main/generate-report/generate-report.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  {
    path: 'main', component: MainComponent,
    children: [

      { path: 'add-record', component: AddRecordComponent },
      { path: 'view-record', component: ViewRecordComponent },
      { path: 'activate-record', component: ActivateRecordComponent },
      { path: 'deactivate-record', component: DeactivateRecordComponent },
      { path: 'generate-report', component: GenerateReportComponent },
      { path: '**', redirectTo: 'add-record', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
>>>>>>> 92ac8d5f29660fa6a655eff0a58a16b4bf1aef6c
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
