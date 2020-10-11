import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-direct',
  templateUrl: './direct.component.html',
  styleUrls: ['./direct.component.scss']
})
export class DirectComponent implements OnInit {

  lineType:string=null;
  lineCode:string=null;
  stationSlug:string=null;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    let options={}
    this.route.queryParams.subscribe(res=>{
      console.log(res)
      if(res.lineType && res.lineCode && res.stationSlug){
        this.lineType=res.lineType;
        this.lineCode=res.lineCode;
        this.stationSlug=res.stationSlug.replace(/ /gi, '+');
      }
      
      console.log(this.stationSlug)
    })
  }

  allOk(){
    return (this.lineType && this.lineCode && this.stationSlug)
  }

}
