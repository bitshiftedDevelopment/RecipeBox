import { Component, OnInit } from '@angular/core';
import * as mockdata from '@app/demorecipe.json';

@Component({
  selector: 'recipe-browser',
  templateUrl: './recipe-browser.component.html',
  styleUrls: ['./recipe-browser.component.scss']
})
export class RecipeBrowserComponent implements OnInit {
  data = mockdata;
  constructor() { }

  ngOnInit() {
  }

}
