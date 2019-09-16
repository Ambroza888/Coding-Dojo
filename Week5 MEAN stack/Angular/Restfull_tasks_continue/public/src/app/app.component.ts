import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title = 'public'
  tasks:any;
  yo:any;
  the_id:any;
  ngOnInit(){
    this.getTasksFromService();
  }


  getTasksFromService(){
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      console.log("got Our data!",data)
      this.tasks = data;
    });
  }
  onClickTasks(){
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      this.yo = data;
    });
  }
  idtaker(id:number){
    let obs = this._httpService.getById(id)
    obs.subscribe(data =>{
      this.the_id = data;
      console.log(data)
    })
    
  }
}
