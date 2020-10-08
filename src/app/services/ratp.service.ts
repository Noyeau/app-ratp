import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/Operators'
import { ratpIcons } from './datas-image-ratp';

@Injectable({
    providedIn: 'root',
})
export class RatpService {
    private apiUrl: string = "https://api-ratp.pierre-grimaud.fr/v4/"

    public allDatas: any[] = JSON.parse(localStorage.getItem('allDatas')) || []

    linesType = []

    constructor(
        private http: HttpClient
    ) {
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


    initService() {
        this.getallDatas().subscribe()
    }


    getallDatas() {
        return this.http.get(this.apiUrl + 'lines').pipe(map((res: any) => {
            this.allDatas = []
            for (let type in res.result) {
                this.linesType.push(type);
                this.allDatas.push({
                    type, lines: res.result[type]
                })
                this.saveLocalDatas()
            }
        }));
    }

    getLines(lineType): any {
        return this.allDatas.find(x => x.type == lineType)
    }

    getLine(lineType, lineCode): any {
        return this.getLines(lineType).lines.find(x => x.code == lineCode)
    }

    getStations(lineType, lineCode):Promise<any[]> {
        return new Promise(resolve => {

            let line = this.getLine(lineType, lineCode)
            if (line && line.stations) {
                return resolve(line.stations)
            }
            this.http.get(this.apiUrl + `stations/${lineType}/${lineCode}`).subscribe((res: any) => {
                line.stations = res.result.stations
                this.saveLocalDatas()
                resolve(res.result.stations)
            })
        })

    }

    getShedule(lineType, lineCode, stationSlug, way = "A+R") {
        return this.http.get(this.apiUrl + `schedules/${lineType}/${lineCode}/${stationSlug}/${way}`)
    }

    saveLocalDatas() {
        localStorage.setItem("allDatas", JSON.stringify(this.allDatas))
    }

}
