import { Component, OnInit, Input } from '@angular/core';
import { Details } from './details'
@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  /*
  cardTitle='Title';//rem
  cardSubtitle='Subtitle';//rem
  cardAvatar='https://material.angular.io/assets/img/examples/shiba1.jpg';//rem
  cardContent='Content goes here';//rem
  */
  @Input() cardActions: [string];
  @Input() details: Details;
  constructor() { }

  ngOnInit() {
  }

}
