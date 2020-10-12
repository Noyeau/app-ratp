import { Component, OnInit, Input } from '@angular/core';

import { MAT_BOTTOM_SHEET_DATA, MatBottomSheet } from '@angular/material/bottom-sheet';
import { FavoryService } from 'src/app/services/favory.service';
import { NgxNoyRatpService } from 'ngx-noy-ratp';
import { IconService } from 'src/app/services/icon.service';
import { BottomScheduleComponent } from '../bottom-schedule/bottom-schedule.component';
import { ModalListComponent } from '../modal-list/modal-list.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-schedule-item',
  templateUrl: './schedule-item.component.html',
  styleUrls: ['./schedule-item.component.scss']
})
export class ScheduleItemComponent implements OnInit {
  private _lineType
  private _lineCode
  private _stationSlug

  private _request

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
    private ratpService: NgxNoyRatpService,
    public favoryService: FavoryService,
    private iconService: IconService,
    private _bottomSheet: MatBottomSheet,
    public dialog: MatDialog
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
            trains: []
          }
          this.datas.push(data)
        }
        data.trains.push(el)

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



  openBottomSchedule(){
    this._bottomSheet.open(BottomScheduleComponent, {
      data: { stationSlug:this.stationSlug, lineType: this.lineType, lineCode:this.lineCode },
    })
  }


  openDialog(title, list): void {
    const dialogRef = this.dialog.open(ModalListComponent, {
      width: '250px',
      data: {title, list}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}