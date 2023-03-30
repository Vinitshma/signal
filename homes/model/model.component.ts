import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  @Input() openPopUp:boolean = false;
  @Output() public setOpenPopupToFalse= new EventEmitter();
  statusToSetFalse:boolean=true;

  constructor() { 
    console.log(this.openPopUp);
  }

  ngOnInit(): void {
    document.getElementById("_add_Template")?.click();
    if(this.openPopUp ==  true){
      // this.statusToSetFalse =false;
      console.log(this.statusToSetFalse, "true");
    }
  }


  show(){
    if(this.openPopUp == true){
      console.log("open")
    }
   }

  close(){
    this.statusToSetFalse=!this.statusToSetFalse;
    console.log(this.statusToSetFalse,"close");
    this.setOpenPopupToFalse.emit(this.statusToSetFalse);
  }

}
