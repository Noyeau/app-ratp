import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalListComponent } from '../modal-list/modal-list.component';

@Component({
  selector: 'app-schedule-message',
  templateUrl: './schedule-message.component.html',
  styleUrls: ['./schedule-message.component.scss']
})
export class ScheduleMessageComponent implements OnInit {
@Input() schedule
  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit() {
  }

  haveStations(){
    return (this.schedule.mission.stations && this.schedule.mission.stations.length) ? true : false
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalListComponent, {
      data: {title:this.schedule.mission.code, list: this.schedule.mission.stations}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
