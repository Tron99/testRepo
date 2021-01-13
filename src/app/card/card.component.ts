import { Component, Input, OnInit } from '@angular/core';
import { InsureItem } from '../interfaces/insure-item';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data :InsureItem;

  pausedItems = [];
  cardStatus =''

  constructor() { }

  ngOnInit(): void {
    console.log("dataHere", this.data)
    this.pausedItems = this.data.pausedItems
    this.cardStatus = this.data.status
  }

}
