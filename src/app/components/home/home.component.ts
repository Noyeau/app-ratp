import { Component, OnInit } from '@angular/core';
import { FavoryService } from 'src/app/services/favory.service';
import { RatpService } from 'src/app/services/ratp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
elems=[]
  constructor(
    private favoryService: FavoryService,
    private ratpService: RatpService

  ) { }

  ngOnInit() {
    this.elems = this.favoryService.favoryList
  }

  getIcon(lineType, lineCode = false) {
    return this.ratpService.getIcon(lineType, lineCode)
  }

}
