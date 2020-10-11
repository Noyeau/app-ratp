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
  favoryList = []
  constructor(
    private favoryService: FavoryService,
    private iconService: IconService

  ) { }

  ngOnInit() {
    this.favoryList = this.favoryService.favoryList
    if(!this.favoryList || !this.favoryList.length){
    }
  }

  getIcon(lineType, lineCode = false) {
    return this.iconService.getIcon(lineType, lineCode)
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.favoryList, event.previousIndex, event.currentIndex);
    this.favoryService.updateFavoryList(this.favoryList)
  }

}
