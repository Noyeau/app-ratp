import { Injectable } from '@angular/core';
import { ratpIcons } from './datas-image-ratp';
@Injectable({
  providedIn: 'root'
})
export class IconService {

  constructor() {
    this.initIcons()
  }


  initIcons() {
    ratpIcons.forEach((x: any) => {

      if (x.indice === 'B') {
        x.lineType = "buses"
        x.lineCode = false;
      } else if (x.indice === 'T') {
        x.lineType = "tramways"
        x.lineCode = false;
      } else if (x.indice === 'M') {
        x.lineType = "metros"
        x.lineCode = false;
      } else if (x.indice === 'N') {
        x.lineType = "noctiliens"
        x.lineCode = false;
      } else if (x.indice === 'R') {
        x.lineType = "rers"
        x.lineCode = false;
      } else if (x.indice === 'funiculaire') {
        x.lineType = "metros"
        x.lineCode = "Fun";
      } else if (x.indice === 'Orlyval') {
        x.lineType = "metros"
        x.lineCode = "Orv";
      } else if (!isNaN(x.indice[0])) {
        x.lineType = "buses"
        x.lineCode = x.indice
      } else if (x.indice[0] === 'T') {
        x.lineType = "tramways"
        x.lineCode = (x.indice as string).replace('T', '').replace('bis', 'b')
      } else if (x.indice[0] === 'M') {
        x.lineType = "metros"
        x.lineCode = (x.indice as string).replace('M', '').replace('bis', 'b')
      } else if (x.indice[0] === 'N') {
        x.lineType = "noctiliens"
        x.lineCode = (x.indice as string).replace('N', '').replace('bis', 'b')
      } else if (x.indice.includes('RER ')) {
        x.lineType = "rers"
        x.lineCode = (x.indice as string).replace('RER ', '').replace('bis', 'b')
      }
    })
  }


  getIcon(lineType, lineCode = false) {
    let elem = ratpIcons.find((x: any) => x.lineType == lineType && x.lineCode == lineCode)
    if (elem) {
      return 'assets/ratp-icons/' + elem.fileName
    }
    return false
  }
}
