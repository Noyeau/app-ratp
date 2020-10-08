import { Component, OnInit, Inject, Input } from '@angular/core';
import { RatpService } from 'src/app/services/ratp.service';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-shedule',
  templateUrl: './shedule.component.html',
  styleUrls: ['./shedule.component.scss']
})

export class SheduleComponent implements OnInit {
  @Input() lineType
  @Input() line
  @Input() station


  datas = []

  constructor(
    private ratpService: RatpService
  ) { }

  ngOnInit() {
    this.ratpService.getShedule(this.lineType, this.line.code, this.station.slug).subscribe((res: any) => {
      res.result.schedules.map(el => {
        let data = this.datas.find(x=>x.destination == el.destination)
        if(!data){
          data = {
            destination:el.destination,
            messages:[]
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

}
