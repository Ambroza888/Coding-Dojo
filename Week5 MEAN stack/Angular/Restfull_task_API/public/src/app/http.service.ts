import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class HttpService {
  constructor(private _http: HttpClient) { 
    // this.getTasks();
    // this.getPokemon();
    // this.getAllgrowthAbility();
  }
  getTasks(){
    return this._http.get('/task')
  } 
  getPokemon(){
    return this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
  }
  getAllgrowthAbility(){
    return this._http.get("https://pokeapi.co/api/v2/ability/65/")
  }
} 
