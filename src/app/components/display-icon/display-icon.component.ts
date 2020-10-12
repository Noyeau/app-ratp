import { Component, OnInit, Input } from '@angular/core';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-display-icon',
  templateUrl: './display-icon.component.html',
  styleUrls: ['./display-icon.component.scss']
})
export class DisplayIconComponent implements OnInit {
  public label=""
  @Input() lineType
  @Input() lineCode=null
  @Input() displayOnlyCode=true
  @Input() public size="50px"
  @Input() public fontSize="30px"




  constructor(
    private iconService: IconService
  ) { }

  ngOnInit() {
    if(!this.lineCode){
      this.label = this.lineType
    } 
    else {
      if(this.displayOnlyCode){
        this.label = this.lineCode
      } else {
        this.label =this.lineType +' '+ this.lineCode
      }
    }
  }

  getIcon() {
    return this.iconService.getIcon(this.lineType, this.lineCode ? this.lineCode:false)
  }

}
