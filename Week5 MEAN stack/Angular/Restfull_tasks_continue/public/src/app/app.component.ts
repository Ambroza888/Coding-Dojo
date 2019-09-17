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
  selectedTask:any;
  taskToUpdate:any;

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
  taskToShow(id_num:number){
    let obs = this._httpService.getById(id_num)
    obs.subscribe(data =>{
      this.selectedTask = data
    })
  }
  create(){
    let obs = this._httpService.createTask(this.newTask)
    obs.subscribe(data =>{
      this.newTask = {title:"",description:""}
      this.getTasksFromService()
    })
  }
  ShowToEditTask(id_num:number){
    let obs = this._httpService.getById(id_num)
    obs.subscribe(data =>{
      // console.log(data)
      this.taskToUpdate = data;
    })
  }
  editTask(){
    let obs = this._httpService.edTask(this.taskToUpdate)
    obs.subscribe(data =>{
      // console.log(data)
      // this.taskToUpdate = data;
      this.getTasksFromService()
    })
    // let task = {_id:this.taskToUpdate._id,title:this.taskToUpdate.title,description:this.taskToUpdate.description}
  }
  deleteTask(id_num){
    let obs = this._httpService.deleteTask(id_num)
    obs.subscribe(data =>{
      this.getTasksFromService()
    })
  }
}
