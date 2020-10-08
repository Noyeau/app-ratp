import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { RatpService } from './services/ratp.service';
import * as mermaid from 'mermaid'
import { FavoryService } from './services/favory.service';

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
    private ratpService: RatpService,
    private favoryService: FavoryService) {
  }

  ngOnInit() {
    
    this.ratpService.initService().then(()=>{
      this.favoryService.initService()
      this.ready=true
    })


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
