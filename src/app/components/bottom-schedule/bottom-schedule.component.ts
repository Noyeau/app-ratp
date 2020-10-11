import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-schedule',
  templateUrl: './bottom-schedule.component.html',
  styleUrls: ['./bottom-schedule.component.scss']
})
export class BottomScheduleComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomScheduleComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    ) {
      console.log(data)
    }

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
