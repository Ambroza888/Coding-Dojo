import { Component } from '@angular/core';
import { match } from 'minimatch';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gold = 0;
  mess = [];
  
  Job(){
    const num = Math.floor((Math.random()*7)+3);
    this.gold = this.gold + num
    this.mess.unshift([`You Gained ${num} gold!!`, 0]);
  }
  DragonT(){
    const num = Math.floor((Math.random()*10)+5);
    this.gold = this.gold + num;
    this.mess.unshift([`You have won ${num} of training the Dragon`, 0])
  }
  PetTerapest(){
    const num = Math.floor((Math.random()*20)+10);
    this.gold = this.gold + num;
    this.mess.unshift([`You have won ${num} from petTerapeft!`, 0])
  }
  Casino(){
    const chance = this.randomNum()
    const num = Math.floor((Math.random()*50)+0)
    if (chance == 0){
      this.gold = this.gold + num
      this.mess.unshift([`You have won ${num} from the Casino`, 0])
    } 
    else{
      this.gold = this.gold - num;
      this.mess.unshift([`You have LOST ${num} from the cassino`, 1])
    }
  }
  randomNum(){
    return Math.floor((Math.random()*2));
  }
}
