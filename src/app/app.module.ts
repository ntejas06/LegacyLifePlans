import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './core/material/material.module';
import { UserProfileComponent } from './User/user-profile/user-profile.component';
import { RouterModule, Routes } from '@angular/router';
import { EditUserProfileComponent } from './User/edit-user-profile/edit-user-profile.component';
import { DatePipe } from '@angular/common';
import { UserInfoServiceService } from './core/service/user-info-service.service';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/professionals',
    pathMatch: 'full'
  },
  {
    path: 'professionals',
    component: UserProfileComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    EditUserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [DatePipe,UserInfoServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
