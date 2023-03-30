import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {


  @Output() public toggleEvent = new EventEmitter();
  menuStatus:boolean=true;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.menuStatus = !this.menuStatus;
    this.toggleEvent.emit(this.menuStatus);
  }

}
