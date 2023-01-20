import { Component, OnInit } from '@angular/core';
import { topBarModel } from 'src/assets/models/topBarModel.model';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  topBarItems: Array<topBarModel> = [
    {
      label: 'Home',
      path: '/home'
    },
    {
      label: 'Page 1',
      path: '/page1'
    },
    {
      label: 'Page 2',
      path: '/page2'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
