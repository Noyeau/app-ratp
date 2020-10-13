import { Component, OnInit } from '@angular/core';
import { NgxNoyRatpService } from 'ngx-noy-ratp';
import { IconService } from 'src/app/services/icon.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalInfoComponent } from '../modal-info/modal-info.component';

@Component({
  selector: 'app-infoTrafic',
  templateUrl: './infoTrafic.component.html',
  styleUrls: ['./infoTrafic.component.scss']
})
export class InfoTraficComponent implements OnInit {


  infoTraffic=null

  constructor(
    private ratpService:NgxNoyRatpService,
    private iconService : IconService,
    public dialog: MatDialog
  ) {
    this.ratpService.getTraffic().subscribe(res=>{
      this.infoTraffic = res
    })
  }

  ngOnInit() {
  }


  generalInfoByType(lineType){
    if(this.infoTraffic && this.infoTraffic[lineType]){
      let infoType = this.infoTraffic[lineType];
      let rep = {
        normal : [],
        travaux:[],
        noNormal:[] 
      }
      infoType.map(line=>{
        if(line.slug.includes('normal')){
          rep.normal.push(line)
        }
        if(line.slug.includes('trav')){
          rep.travaux.push(line)
        }
        if(!line.slug.includes('normal')){
          rep.noNormal.push(line)
        }
      })
      return rep;
    }
    return null;
  }

  getIcon(lineType, lineCode = false):string {
    return this.iconService.getIcon(lineType, lineCode) as string
  }


  openDialog(info): void {
    const dialogRef = this.dialog.open(ModalInfoComponent, {
      // width: '250px',
      data: {title: info.title, message: info.message}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


}
