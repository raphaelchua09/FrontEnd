import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatButtonModule} from '@angular/material/button';
<<<<<<< HEAD
import { PatientComponent } from './patient/patient.component';
=======
import { MainComponent } from './main/main.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AddRecordComponent } from './main/add-record/add-record.component';
import { ViewRecordComponent } from './main/view-record/view-record.component';
import { ActivateRecordComponent } from './main/activate-record/activate-record.component';
import { DeactivateRecordComponent } from './main/deactivate-record/deactivate-record.component';
import { GenerateReportComponent } from './main/generate-report/generate-report.component';
>>>>>>> 92ac8d5f29660fa6a655eff0a58a16b4bf1aef6c




@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    PatientComponent
=======
    MainComponent,
    LandingPageComponent,
    AddRecordComponent,
    ViewRecordComponent,
    ActivateRecordComponent,
    DeactivateRecordComponent,
    GenerateReportComponent
>>>>>>> 92ac8d5f29660fa6a655eff0a58a16b4bf1aef6c
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
