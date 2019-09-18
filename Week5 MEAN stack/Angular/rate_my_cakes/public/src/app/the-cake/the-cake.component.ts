import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-the-cake',
  templateUrl: './the-cake.component.html',
  styleUrls: ['./the-cake.component.css']
})
export class TheCakeComponent implements OnInit {
@Input() the_cake:any;
@Input() avgSum:any;
  constructor() { }

  ngOnInit() {
  }

}
