import { PatientService } from './../../service/patient.service';
import { Patient } from './../../models/patient.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.scss']
})
export class PatientComponent implements OnInit {
  patient: Patient = {
    lastName: '',
    firstName: '',
    middleName: '',
    address: '',
    email: '',
    contactNumber: 0,
    birthDate: null,
    gender: '',
    status: true,
  };

  constructor(private PatientService: PatientService) { }

  ngOnInit(): void {
  }

  savePatient(): void{
    const data = {
      lastName: this.patient.lastName,
      firstName: this.patient.firstName,
      middleName: this.patient.middleName,
      address: this.patient.address,
      email: this.patient.email,
      contactNumber: this.patient.contactNumber,
      birthDate: this.patient.birthDate,
      gender: this.patient.gender,
      status: true,
    }
    
    this.PatientService.create(data)
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }
}
