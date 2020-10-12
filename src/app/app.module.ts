import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ScheduleComponent } from './components/schedule/schedule.component';
import { BottomScheduleComponent } from './components/bottom-schedule/bottom-schedule.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FavoryComponent } from './components/favory/favory.component';
import { ScheduleItemComponent } from './components/schedule-item/schedule-item.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HomeComponent } from './components/home/home.component';
import { DirectComponent } from './components/direct/direct.component';
import { ModalListComponent } from './components/modal-list/modal-list.component';
import { InfoTraficComponent } from './components/infoTrafic/infoTrafic.component';


@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    BottomScheduleComponent,
    SearchFormComponent,
    FavoryComponent,
    ScheduleItemComponent,
    HomeComponent,
    DirectComponent,
    ModalListComponent,
    InfoTraficComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
  ],
  providers: [],
  entryComponents: [ModalListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }

