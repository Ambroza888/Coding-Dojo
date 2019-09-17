import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}

  newUrl:any;
  allCakes:any
  review:any;
  the_cake:any;
  
  ngOnInit(){
    this.newUrl = {url:'',bakerName:''};
    this.getCakes();
    this.review = {comment:'Type your comment here',rating:5}
  }

  takingUrl(){
    let obs = this._httpService.takingUrl(this.newUrl)
    obs.subscribe(data =>{
      console.log(`The URL going to backend is --- >${data}`)
      this.newUrl = {url:'',bakerName:''}
      this.getCakes();
    })
  }
  getCakes(){
    let obs = this._httpService.getCakes()
    obs.subscribe(data =>{
      this.allCakes = data;
    })
  }
  sendingRate(id){
    let obs = this._httpService.sendingRate(id,this.review)
    obs.subscribe(data=>{
      console.log(data)
      this.review = {comment:'',rating:''}
    })
  }
  showTheCake(id){
    let obs = this._httpService.showTheCake(id)
    obs.subscribe(data=>{
      console.log(data)
      this.the_cake = data
    })
  }
}
