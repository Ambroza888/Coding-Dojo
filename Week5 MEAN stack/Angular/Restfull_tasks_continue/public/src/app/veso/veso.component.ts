import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-veso',
  templateUrl: './veso.component.html',
  styleUrls: ['./veso.component.css']
})
export class VesoComponent implements OnInit {
@Input() taskToShow :any;
  constructor() { }

  ngOnInit() {
  }

}
