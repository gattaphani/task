import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import {Router, Params} from '@angular/router';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  getdata: any;

  id:any;

  dataList: any;
  
  
  modaldata: any;
 
  constructor(private data:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.gatAll();
    // this.viewmodal(this.id);
    
  }

gatAll(){
 this.data.getalldata().subscribe(data => {
 
     this.getdata = data.hits;
     
     console.log('getdata :',this.getdata)
   })
 }

 viewmodal(id)
 {
  console.log('id',id);
 this.modaldata=id;
 console.log('modal data',id);
 }

}


