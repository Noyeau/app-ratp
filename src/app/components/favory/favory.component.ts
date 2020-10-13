import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FavoryService } from 'src/app/services/favory.service';
import { IconService } from 'src/app/services/icon.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-favory',
  templateUrl: './favory.component.html',
  styleUrls: ['./favory.component.scss']
})
export class FavoryComponent implements OnInit {
  
  constructor(
    private favoryService: FavoryService,
    private iconService: IconService

  ) { }

  ngOnInit() {

    if (!this.favoryList() || !this.favoryList().length) {
    }
  }

  getIcon(lineType, lineCode = false) {
    return this.iconService.getIcon(lineType, lineCode)
  }

  drop(event: CdkDragDrop<string[]>) {
    let tmp = this.favoryList()
    moveItemInArray(tmp, event.previousIndex, event.currentIndex);
    this.favoryService.updateFavoryList(tmp)
  }

  deleteFav(fav){
    console.log(fav)
    this.favoryService.deleteFavory(fav.type, fav.code, fav.slug)
  }

  favoryList(){
    return this.favoryService.favoryList
  }
  changeShowValue(favory, valueSow) {
    favory.show = valueSow
    this.favoryService.updateFavory(favory)
  }



}
