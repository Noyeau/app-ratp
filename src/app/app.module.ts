import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ListLineComponent } from './components/listLine/listLine.component';
import { ListTypeComponent } from './components/listType/listType.component';
import { SheduleComponent } from './components/shedule/shedule.component';
import { BottomSheduleComponent } from './components/bottom-shedule/bottom-shedule.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [	
    AppComponent,
    ListLineComponent,
    ListTypeComponent,
    SheduleComponent,
    BottomSheduleComponent,
      SearchFormComponent,
      HomeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

