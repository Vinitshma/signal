import { Component, Input, OnInit } from '@angular/core';
import { navItems } from './_nav';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  navigations=navItems;
  @Input() toggleEventStatus : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.navigations = navItems;
  }

}
