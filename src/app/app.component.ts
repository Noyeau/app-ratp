import { Component, OnInit } from '@angular/core';
import { NgxNoyRatpService } from 'ngx-noy-ratp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public ready: boolean = false
  constructor(
    private ratpService: NgxNoyRatpService
  ) {
  }

  ngOnInit() {
    this.ratpService.initService(true).subscribe(() => {
      this.ready = true
    })
  }

}
