import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxNoyRatpService } from 'ngx-noy-ratp';
import { Observable } from 'rxjs';
import { IconService } from 'src/app/services/icon.service';
import { environment } from 'src/environments/environment';

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
    private ratpService: NgxNoyRatpService,
    private iconService: IconService

  ) { }

  ngOnInit() {
  }

  getLineType() {
    return this.ratpService.getLinesTypes()
  }

  setLineType(lineType) {
    this.stationList = []
    this.selection.lineType = lineType
    this.selection.line = null
    this.selection.station = null
    setTimeout(() => {
      this.stepper.next()
    }, 200)
  }


  setLine(lineCode) {
    this.selection.line = lineCode
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


  getLines(lineType) {
    function helpSort(name): number {
      let tmp = name
      if (isNaN(name)) {
        tmp = name.split('').filter((x, i, all) => i !== all.length - 1).join('')
        if (!isNaN(tmp)) {
          return +tmp
        }
      }
      return +name
    }
    return new Observable(observer => {
      this.ratpService.getType(lineType).subscribe((res: any) => {
        if (res && res.lines) {
          if (!environment.production && lineType == "rers") {
            res.lines = res.lines.filter(x => x.code == "A" || x.code == "B")
          }
          res.lines = res.lines.reduce((unique, item) => unique.find(x => x.code == item.code) ? unique : [...unique, item], [])

          res.lines.sort((a, b) => {
            if (helpSort(a.code) > helpSort(b.code)) return 1
            else if (helpSort(a.code) < helpSort(b.code)) return -1
            else return 0
          })




          return observer.next(res.lines)
        }
        return []
      })
    })
  }

  getIcon(lineType, lineCode = false) {
    return this.iconService.getIcon(lineType, lineCode)
  }





  getStations() {
    if (!this.selection.line) {
      this.stationList = []
    } else if (this.selection.line && this.selection.line['stations']) {
      this.stationList = this.selection.line['stations']
    } else {
      this.ratpService.getStations(this.selection.lineType, this.selection.line.code).subscribe(res => {
        this.stationList = res
      })
    }

  }


  allValide() {
    return (this.selection.lineType && this.selection.line && this.selection.station) ? true : false;
  }

}
