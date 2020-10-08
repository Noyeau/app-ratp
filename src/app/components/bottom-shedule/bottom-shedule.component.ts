import { Component, OnInit, Inject } from '@angular/core';
import { MatBottomSheetRef, MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-shedule',
  templateUrl: './bottom-shedule.component.html',
  styleUrls: ['./bottom-shedule.component.scss']
})
export class BottomSheduleComponent {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheduleComponent>,
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: any,
    ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
