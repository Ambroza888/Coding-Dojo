import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}

  tasks:any;
  showTasks:any;
  the_id_title:any;
  the_id_description:any;
  newTask:any;

  ngOnInit(){
    this.getTasksFromService();
    this.newTask = {title:'',description:''}
  }


  getTasksFromService(){
    let obs = this._httpService.getTasks()
    obs.subscribe(data => {
      console.log("got Our data!",data)
      this.tasks = data;
    })
  }
  ShowOnclick(){
    let obs = this._httpService.getTasks()
    obs.subscribe(data =>{
      console.log(data)
      this.showTasks = data;
    })
  }
  id_taker(id_num:number){
    let obs = this._httpService.getById(id_num)
    obs.subscribe(data =>{
      console.log(data)
      this.the_id_title = data['title']
      this.the_id_description = data['description']
    })
  }
  create(){
    let obs = this._httpService.createTask(this.newTask)
    obs.subscribe(data =>{
      this.newTask = {title:"",description:""}
    })
  }
}
