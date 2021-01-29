import { Component, OnInit ,Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators , FormArray, FormControl } from '@angular/forms';
import { AddressService } from 'src/app/services/add-address.service';
import { NewAddress } from 'src/model/address.model';
import { Patient } from 'src/model/patient.model';
@Component({
  selector: 'app-view-individual-record-dialog',
  templateUrl: './view-individual-record-dialog.component.html',
  styleUrls: ['./view-individual-record-dialog.component.scss']
})
export class ViewIndividualRecordDialogComponent implements OnInit {
  recordForm: FormGroup;
  isEdit=false;
  newAddress = new FormArray([]);

  submitted = false;
  addressForm:FormGroup;
  private patient: Patient[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data,private formBuilder: FormBuilder, private addressService:AddressService) { 
    
  } 
  
 
  ngOnInit(): void {
    console.log(this.data);
    this.recordForm=this.formBuilder.group({
      firstName:[this.data.firstName, [Validators.required]],
      middleName:[this.data.middleName, [Validators.required]],
      lastName:[this.data.lastName, [Validators.required]],
      email:[this.data.email, [Validators.required]],
      contactNumber:[this.data.contactNumber, [Validators.required]],
      birthdate:[this.data.birthdate, [Validators.required]],
      gender:[this.data.gender, [Validators.required]],

    })
    this.addressForm=this.formBuilder.group({
      addressArray:this.formBuilder.array([
       this.formBuilder.control("")
      ])

    })
  
  }

  get addressArray (){
    return this.addressForm.get('addressArray') as FormArray;
  }

  createAddress(){
    this.addressArray.push(this.formBuilder.control(""));
  }

  // testAddAddress(){
  //   this.addressArray.push(this.createAddress());
    
  // }

  submitAddress(){
    for(let address of this.addressArray.controls){
      console.log(address.value);
      let body = {
        address : address.value,
        patientId: this.data.patientId
      }
       this.addressService.create(body).subscribe(p=>{

        console.log("Address Entry");


       })
    }
    //console.log(JSON.stringify(this.addressForm));
    // for(let address of this.addressForm.get('addressArray')['controls']){
    //   console.log(address.value);
    // }
  }

  // removeItem(){
  //   this.addressItems.pop();
  //   this.addressArray.removeAt(this.addressArray.length-1);
  // }

 
  //Code here Swarti
  activateRecord(){

  }
  //Code here Swarti
  deactivateRecord(){

  }
  //Code here Kevin
  
  addAddress()
  {
    this.isEdit=true;
    
    this.addressService.create(this.newAddress).subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
    
  }
//Pang trigger ng new address entry if ever
  addMultipleAddress()
  {

    this.newAddress.push(new FormControl(''));
    this.isEdit=true;
    this.recordForm.enable()

  }

  
  editRecord(){
    
    this.isEdit=true;
    this.recordForm.enable();
  }


  //Code here Albert
  submitRecord()
  {

  }
  closeEdit(){
    this.isEdit=false;
    this.recordForm.disable();

  }
}
