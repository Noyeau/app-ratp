import { Component, OnInit, ViewChild, ElementRef, AfterContentInit } from '@angular/core';
import { RatpService } from './services/ratp.service';
import * as mermaid from 'mermaid'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterContentInit {
  @ViewChild('mermaid', { static: true }) public mermaidDiv:ElementRef;

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
  constructor(private ratpService: RatpService) {
  }

  ngOnInit() {
    this.ratpService.initService()


  }

  ngAfterContentInit(): void {
    mermaid.initialize({
      theme: "dark"
    });
console.log("test")
console.log(this.mermaidDiv)
    const element: any = this.mermaidDiv.nativeElement;
    const graphDefinition = "graph TB\na-->b";
    mermaid.render("graphDiv", graphDefinition, (svgCode, bindFunctions) => {
      element.innerHTML = svgCode;
    });
  }
}
