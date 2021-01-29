import { PatientService } from '../../../service/patient.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.scss']
})

export class AddRecordComponent implements OnInit {
  addPatient: FormGroup;
  submitted = false;
  constructor( private PatientService:PatientService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.addPatient=this.formBuilder.group({
      firstName:["", [Validators.required]],
      middleName:["", [Validators.required]],
      lastName:["", [Validators.required]],
      email:["", [Validators.required,Validators.email]],
      contactNumber:["", [Validators.required, Validators.pattern("[0-9]{11}")]],
      birthdate:["", [Validators.required]],
      gender:["", [Validators.required]],
      address:["", [Validators.required]],
      status:["1"],
    })
  }
  savePatient(): void{
    console.log(this.addPatient.value);
    this.PatientService.create(this.addPatient.value)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        }); 
  }
  newPatient(): void{
    this.submitted = false;
    this.addPatient.reset();
  }

}
