import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // private mediaSub:Subscription;
  constructor(
  //  private mediaObserver: MediaObserver
  ){ }

  ngOnInit(): void {
    // this.mediaSub = this.mediaObserver.media$.subscribe({
    // })    
  }
}
