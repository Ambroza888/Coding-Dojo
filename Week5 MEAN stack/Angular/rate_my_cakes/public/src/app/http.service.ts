import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private _http: HttpClient) { }
  takingUrl(url){
    return this._http.post('/cake/create',url)
  }
  getCakes(){
    return this._http.get('/cake')
  }
  sendingRate(id,comment){
    return this._http.put(`/cake/${id}`,comment)
  }
  showTheCake(id){
    return this._http.get(`/cake/${id}`)
  }

}
