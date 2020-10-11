import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FavoryService } from 'src/app/services/favory.service';
import { NgxNoyRatpService } from 'ngx-noy-ratp';
import { IconService } from 'src/app/services/icon.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})

export class ScheduleComponent implements OnInit, OnDestroy {
  private _lineType
  private _lineCode
  private _stationSlug

  private _request

  @Input() set lineType(value) {
    this._lineType = value;
    console.log(value)
    this.init()
  }
  @Input() set lineCode(value) {
    this._lineCode = value;
    console.log(value)

    this.init()
  }
  @Input() set stationSlug(value) {
    this._stationSlug = value;
    console.log(value)

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
    private ratpService: NgxNoyRatpService,
    public favoryService: FavoryService,
    private iconService: IconService
  ) { }
  init() {
    if(this.lineType && this.lineCode && this.stationSlug){
      this.ratpService.getLine(this.lineType, this.lineCode).subscribe(res=>{
        this.line = res
      })
      this.ratpService.getStation(this.lineType, this.lineCode, this.stationSlug).subscribe(res=>{
        this.station = res
      })
      this.update()
      if(this.timer)[
        clearInterval(this.timer)
      ]
      this.timer = setInterval(() => {
        this.update()
      }, 5000)
    }

  }
  ngOnInit() {



  }

  ngOnDestroy(){
    if(this._request){
      this._request.unsubscribe()
    }
    if(this.timer)[
      clearInterval(this.timer)
    ]
  }

  update() {
    if(this._request){
      this._request.unsubscribe()
    }
    this._request = this.ratpService.getSchedule(this.lineType, this.lineCode, this.stationSlug).subscribe((res: any) => {
      this.datas = []
      res.map(el => {
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
    return this.iconService.getIcon(lineType, lineCode)
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

canShare(){
  if (!("share" in navigator)) {
    return false
  }
  return true
}
  share(){
    let url = `https://ratp.noyeau.io/direct/?lineType=${encodeURI(this.lineType)}&lineCode=${encodeURI(this.lineCode)}&stationSlug=${encodeURI(this.stationSlug)}`
    let data = {
      title: 'RATP-Live',
      text: 'Trafic de la station en LIVE',
      url: url
    }
    console.log(data)
    if (!("share" in navigator)) {
      alert('Web Share API not supported.');
      return;
    }

    window.navigator['share'](data)
    .then(() => console.log('Successful share'))
    .catch(error => console.log('Error sharing:', error));
  }

}
