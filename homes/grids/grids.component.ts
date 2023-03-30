import { Component, Input, OnInit } from '@angular/core';
import { HomeserveService } from '../../Services/homeserve.service';


@Component({
  selector: 'app-grids',
  templateUrl: './grids.component.html',
  styleUrls: ['./grids.component.css']
})
export class GridsComponent implements OnInit {

  data:any=[];
  @Input() searchTxt:string="";

  constructor(private serve:HomeserveService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.serve.griddata().subscribe((res:any)=>{
      this.data = res;
      console.log(res)
    })
  }

}
