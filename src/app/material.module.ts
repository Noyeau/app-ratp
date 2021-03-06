import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatMenuModule} from '@angular/material/menu';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const material=[
  MatChipsModule,
  MatTabsModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatBottomSheetModule,
  MatGridListModule,
  MatDividerModule,
  MatToolbarModule,
  MatStepperModule,
  MatButtonModule,
  MatIconModule,
  DragDropModule,
  MatMenuModule,
  MatDialogModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
]


@NgModule({
  imports: [
    CommonModule,
    material
  ],
  exports:[
    material
  ],
  declarations: []
})
export class MaterialModule { }
