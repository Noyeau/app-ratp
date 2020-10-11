import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { FavoryService } from './services/favory.service';
import {  NgxNoyRatpService } from 'ngx-noy-ratp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('mermaid', { static: true }) public mermaidDiv:ElementRef;
ready=false
  title = 'ratp';
  config = {
    startOnLoad: true,
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'cardinal',
    },
    securityLevel: 'loose',
  };
  constructor(
    private ratpService: NgxNoyRatpService,
    private favoryService: FavoryService
    ) {
  }

  ngOnInit() {
    this.ratpService.initService(true).subscribe(()=>{
      this.ready=true
    })
  }

  haveFav(){
    let favList = this.favoryService.favoryList
    if(favList && favList.length){
      return true
    }
    return  false
  }

  ngAfterContentInit(): void {
//     mermaid.initialize({
//       theme: "dark"
//     });
// console.log("test")
// console.log(this.mermaidDiv)
//     const element: any = this.mermaidDiv.nativeElement;
//     const graphDefinition = "graph TB\na-->b";
//     mermaid.render("graphDiv", graphDefinition, (svgCode, bindFunctions) => {
//       element.innerHTML = svgCode;
//     });
  }
}
