import { Component, OnInit, Input } from '@angular/core';
import { RatpService } from 'src/app/services/ratp.service';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { BottomSheduleComponent } from '../bottom-shedule/bottom-shedule.component';

@Component({
  selector: 'app-listLine',
  templateUrl: './listLine.component.html',
  styleUrls: ['./listLine.component.css']
})
export class ListLineComponent implements OnInit {
  @Input() type;


  stations: any[];
  selectedLine: any;

  constructor(
    private ratpService: RatpService,
    private _bottomSheet: MatBottomSheet
  ) { }

  ngOnInit() {
  }

  displayStations(line) {
    console.log(line)
    this.selectedLine = line
    this.ratpService.getStations(this.type.type, line.code).then((res: any[]) => {
      console.log(res)
      this.stations = res
    })
  }

  clickStation(station){
    this._bottomSheet.open(BottomSheduleComponent, {
      data: { station, lineType: this.type.type, line:this.selectedLine },
    })
  }

  getIcon(lineType, lineCode=false){
    return this.ratpService.getIcon(lineType, lineCode)
  }

}

