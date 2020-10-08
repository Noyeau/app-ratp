import { Component, OnInit } from '@angular/core';
import { RatpService } from 'src/app/services/ratp.service';

@Component({
  selector: 'app-listType',
  templateUrl: './listType.component.html',
  styleUrls: ['./listType.component.scss']
})
export class ListTypeComponent implements OnInit {

  constructor(
    private ratpService:RatpService

  ) { }

  ngOnInit() {
  }

  getAllLines(){
    return this.ratpService.allDatas
  }
}
