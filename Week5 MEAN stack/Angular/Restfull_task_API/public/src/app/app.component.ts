import { Component, OnInit} from '@angular/core';
import {HttpService} from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService){}
  title = 'Banana';
  alltasks:any;
  baltazar:any;
  allPokAb:any;
  allPokName:any;
  
  ngOnInit(){
  this.getalltasks();
  this.getbaltazar();
  this.getAllGrowthPoke();
}

getalltasks(){
  let tempObservable = this._httpService.getTasks();
  tempObservable.subscribe(data => {
    // console.log('Got our Tasks VESKU!',data);
    this.alltasks= data;
  });
}

getbaltazar(){
  let tempObservable = this._httpService.getPokemon();
  tempObservable.subscribe(data => {
    console.log(`BALTAZAR's first ability :${data['abilities'][0]['ability']['name']} and the second: ${data['abilities'][1]['ability']['name']}`);
    console.log(`The most intrestin data about Baltazar is his moves ! : ${data['moves'][0]['move']['name']}`)
    this.baltazar = data;
  });
}
getAllGrowthPoke(){
  let tempObservable = this._httpService.getAllgrowthAbility();
  tempObservable.subscribe(data=>{
    console.log(`The pokemon with OverGroth ability are: ${data['pokemon'].length}`)
    for (var i of data['pokemon']){
      console.log(`Poke sharing ability: ${i['pokemon']['name']}`)
    }
    this.allPokName = data['pokemon']
    this.allPokAb = data['pokemon'].length;
  })
}

}