import { Component, OnInit } from '@angular/core';
import { HomeserveService } from '../Services/homeserve.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrls: ['./homes.component.scss']
})
export class HomesComponent implements OnInit {

  datas:any[]=[];
  ngTempVal!:boolean;
  ngMenuVal!:boolean;

  openModelTemplate:boolean = false;
  modelTemplate:boolean = false;
  statusOfClose:boolean=false;

  txtSearch!:string;

  modelComp:any;

  constructor(private serve:HomeserveService) { }

  ngOnInit(): void {
    this.serve.templateApi().subscribe((res:any)=>{
      // console.log(res, "response");
      this.datas = res;
    })
  }


  checkChangeAll(event:any, uid:number, mId:number){
    const e = event.target.checked;
    console.log(e,uid, mId, "chack all");
    const objAll = new ObjMaster();
  }

  checkChangeChild(event:any, list:any, mId:number, tId:number){
    const e = event.target.checked;
    console.log(e, list, mId, tId, "chack child")
  }

  modelShow(){
    console.log(this.statusOfClose);
    if(this.statusOfClose == false){
      this.openModelTemplate = true;
      this.modelTemplate = true;
      console.log(this.openModelTemplate)
    }
  }

}

export class ObjMaster{
  Uid!:number;
  userName:string="";
  menuId!:number;
  menuName:string="";
  templateId!:number;
  tempName:string="";
  tcheck!:boolean;
  mcheck!:boolean;
}