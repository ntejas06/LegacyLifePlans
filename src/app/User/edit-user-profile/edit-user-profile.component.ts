import { DatePipe } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.scss']
})
export class EditUserProfileComponent implements OnInit{
  public userInfoForm!: FormGroup;
  userInfo: any;
  constructor(
    private dialog: MatDialogRef<EditUserProfileComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private datePipe : DatePipe
  ){}

  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    let userDateofbirth = this.datePipe.transform(this.data.dob, 'yyyy-MM-dd');
    this.userInfoForm = this.fb.group({
      name: [this.data.name, Validators.required],
      domain: [this.data.domain, Validators.required],
      gender: [this.data.gender && this.data.gender.toLowerCase() ||'', Validators.required],
      dob: [userDateofbirth || '' , Validators.required],
      phoneNumber: [this.data.phoneNumber, Validators.required],
      location: [this.data.location, Validators.required],
    });
  }

  closeDialog(){
    this.dialog.close({isUpdate: false});
  }

  updateUserInfo(){
    let controls = this.userInfoForm.controls
    this.userInfo = {
      name : controls['name'].value,
      domain : controls['domain'].value,
      gender :controls['gender'].value,
      dob : controls['dob'].value,
      phoneNumber : controls['phoneNumber'].value,
      location : controls['location'].value
    }
    
    this.dialog.close({isUpdate: true, userInfo: this.userInfo});
  }
  
}
