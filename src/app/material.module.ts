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

const material=[
  MatTabsModule,
  MatExpansionModule,
  MatListModule,
  MatCardModule,
  MatChipsModule,
  MatBottomSheetModule,
  MatGridListModule,
  MatDividerModule,
  MatToolbarModule,
  MatStepperModule,
  MatButtonModule,
  MatIconModule,
  DragDropModule,
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
