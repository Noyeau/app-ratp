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
  @Input() lineType
  @Input() lineCode
  @Input() stationSlug

  line
  station
  private timer
  datas = []

  constructor(
    private ratpService: RatpService,
    public favoryService: FavoryService
  ) { }

  ngOnInit() {
    this.line = this.ratpService.getLine(this.lineType, this.lineCode)
    this.station = this.ratpService.getStation(this.lineType, this.lineCode, this.stationSlug)
    this.update()
    this.timer = setInterval(() => {
      this.update()
    }, 5000)


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
    this.favoryService.addFavory(this.lineType, this.lineCode, this.stationSlug)
  }

  isfavoris() {
    return this.favoryService.isFavory(this.lineType, this.lineCode, this.stationSlug)
  }

  delTofavoris() {
    this.favoryService.deleteFavory(this.lineType, this.lineCode, this.stationSlug)
  }

}
