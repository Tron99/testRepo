import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-card',
  templateUrl: './more-card.component.html',
  styleUrls: ['./more-card.component.css']
})
export class MoreCardComponent implements OnInit {


  @Input() data ={
    
  }
  constructor() { }

  ngOnInit(): void {
  }

}
