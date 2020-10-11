import { Component, OnInit } from '@angular/core';
import { FavoryService } from 'src/app/services/favory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private favoryService: FavoryService
  ) { }

  ngOnInit() {
  }


  haveFav() {
    let favList = this.favoryService.favoryList
    if (favList && favList.length) {
      return true
    }
    return false
  }


}
