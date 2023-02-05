import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserInfoServiceService } from 'src/app/core/service/user-info-service.service';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public userInfo!: UserInfo;

  constructor(
    private userService : UserInfoServiceService,
    private matDialog: MatDialog,
    private cdRef: ChangeDetectorRef,
  ){}

  ngOnInit(): void { 
    this.loadUser();
  }

  loadUser(){
    this.userService.getUserInformation().subscribe((res:any)=>{
       this.userInfo = res;
       this.cdRef.detectChanges();
    });
  }

  EditUserProfile(){
   var dailogRef = this.matDialog.open(EditUserProfileComponent,{width: '800px',data: this.userInfo});
    dailogRef.afterClosed().subscribe(res => {
      if(res.isUpdate && res.isUpdate != undefined){
        this.userInfo = res.userInfo;
        this.cdRef.detectChanges();
      }      
    });
  }
}


export class UserInfo {
  name!: string; 
  domain!: string; 
  gender!: string; 
  dob!: string; 
  phoneNumber!: string; 
  location!: string; 
}
