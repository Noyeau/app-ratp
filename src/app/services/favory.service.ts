import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoryService {
  favoryList = JSON.parse(localStorage.getItem('favoryList'))

  constructor() {
console.log(this.favoryList)
  }

  initService() {
    if(!this.favoryList){
      this.favoryList = []
    }
    console.log(this.favoryList)
  }

  getfavory(type, code, slug) {

    return this.favoryList.find((x: any) => x.type == type && x.code == code && x.slug == slug)
  }
  addFavory(type, code, slug, stationName=false) {
    if (!this.getfavory(type, code, slug)) {
      this.favoryList.push({ type, code, slug, stationName })
    }
    this.saveFavory()
  }

  deleteFavory(type, code, slug) {
    let index = this.favoryList.findIndex(x => x.type == type && x.code == code && x.slug == slug)
    if (index !== -1) {
      this.favoryList.splice(index, 1)
    }
    this.saveFavory()
  }

  isFavory(type, code, slug) {
    return this.getfavory(type, code, slug) ? true : false;
  }

  private saveFavory() {
    localStorage.setItem('favoryList', JSON.stringify(this.favoryList))

  }
}
