import { Component, OnInit, Inject, Input } from '@angular/core';
import { RatpService } from 'src/app/services/ratp.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { FavoryService } from 'src/app/services/favory.service';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})

export class SheduleComponent implements OnInit {
  private _lineType
  private _lineCode
  private _stationSlug

  @Input() set lineType(value) {
    this._lineType = value;
    this.init()
  }
  @Input() set lineCode(value) {
    this._lineCode = value;
    this.init()
  }
  @Input() set stationSlug(value) {
    this._stationSlug = value;
    this.init()
  }

  get lineType() {
    return this._lineType;
  }
  get lineCode() {
    return this._lineCode;
  }
  get stationSlug() {
    return this._stationSlug;
  }

  line
  station
  private timer
  datas = []

  constructor(
    private ratpService: RatpService,
    public favoryService: FavoryService
  ) { }
  init() {
    if(this.lineType && this.lineCode && this.stationSlug){
      this.line = this.ratpService.getLine(this.lineType, this.lineCode)
      this.station = this.ratpService.getStation(this.lineType, this.lineCode, this.stationSlug)
      this.update()
      this.timer = setInterval(() => {
        this.update()
      }, 5000)
    }

  }
  ngOnInit() {



  }

  update() {
    this.ratpService.getShedule(this.lineType, this.lineCode, this.stationSlug).subscribe((res: any) => {
      this.datas = []
      res.result.schedules.map(el => {

        let data = this.datas.find(x => x.destination == el.destination)
        if (!data) {
          data = {
            destination: el.destination,
            messages: []
          }
          this.datas.push(data)
        }
        data.messages.push(el.message)
      })
    })
  }

  getIcon(lineType, lineCode = false) {
    return this.ratpService.getIcon(lineType, lineCode)
  }


  addTofavoris() {
    this.favoryService.addFavory(this.lineType, this.lineCode, this.stationSlug, this.station.name)
  }

  isfavoris() {
    return this.favoryService.isFavory(this.lineType, this.lineCode, this.stationSlug)
  }

  delTofavoris() {
    this.favoryService.deleteFavory(this.lineType, this.lineCode, this.stationSlug)
  }

}
