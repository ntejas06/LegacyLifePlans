import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInfoServiceService {

  constructor(private httpService : HttpClient) { }

  getUserInformation(){
    return this.httpService.get('./assets/userinfo.json');
  }
}
