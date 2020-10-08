import { Component, OnInit, ViewChild } from '@angular/core';
import { RatpService } from 'src/app/services/ratp.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements OnInit {
  selection = {
    lineType: null,
    line: null,
    station: null
  }

  @ViewChild('stepper') private stepper

  stationList = []

  constructor(
    private ratpService: RatpService,

  ) { }

  ngOnInit() {
  }

  getLineType() {
    return this.ratpService.linesType
  }

  setLineType(type) {
    this.stationList = []
    this.selection.lineType = type
    this.selection.line = null
    this.selection.station = null
    setTimeout(() => {
      this.stepper.next()
    }, 200)
  }


  getLines(lineType) {
    return this.ratpService.getLines(lineType)
  }

  getIcon(lineType, lineCode = false) {
    return this.ratpService.getIcon(lineType, lineCode)
  }




  setLine(line) {
    this.selection.line = line
    this.getStations()
    this.selection.station = null
    setTimeout(() => {
      this.stepper.next()
    }, 200)
  }

  setStation(station) {
    this.selection.station = station
    setTimeout(() => {
      this.stepper.next()
    }, 200)
  }

  getStations() {
    if (!this.selection.line) {
      this.stationList = []
    } else if (this.selection.line && this.selection.line['stations']) {
      this.stationList = this.selection.line['stations']
    } else {
      this.ratpService.getStations(this.selection.lineType, this.selection.line.code).then(res => {
        this.stationList = res
      })
    }

  }


  allValide() {
    return this.selection.lineType && this.selection.line && this.selection.station ? true : false;
  }

}
