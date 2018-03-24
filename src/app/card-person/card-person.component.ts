import { Component, OnInit, Input } from '@angular/core';
import { Details } from './details'
@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  @Input() cardActions: [string];
  @Input() details: Details;
  constructor() { }

  ngOnInit() {
  }

}
