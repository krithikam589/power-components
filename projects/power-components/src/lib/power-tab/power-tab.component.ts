import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'power-tab',
  templateUrl: './power-tab.component.html',
  styleUrls: ['./power-tab.component.scss']
})
export class PowerTabComponent implements OnInit {

  @Input()
  selected:boolean= false;
  @Input()
  title:string;
  constructor() { }

  ngOnInit() {
  }

}
