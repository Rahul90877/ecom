
import { Component, OnInit } from '@angular/core';
import { TestService } from '../Service/test.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:[TestService]
})
export class HomeComponent implements OnInit {
  list:any = [];
  constructor(private service:TestService){

  }
  prodList = [{"ProductId" : 1, "ProductName" : "TESting", "Description":"efsggfgdf","imgUrl":"https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/t-shirt/33/30/images/artworkimages/medium/1/illustration-of-airbus-a350-test-aircraft-steve-h-clark-photography-transparent.png?targetx=-1&targety=-1&imagewidth=440&imageheight=290&modelwidth=440&modelheight=590"},
  {"ProductId" : 2, "ProductName" : "TESting2", "Description":"efsggfgdf","imgUrl":"https://render.fineartamerica.com/images/rendered/square-product/small/images/rendered/default/t-shirt/33/30/images/artworkimages/medium/1/illustration-of-airbus-a350-test-aircraft-steve-h-clark-photography-transparent.png?targetx=-1&targety=-1&imagewidth=440&imageheight=290&modelwidth=440&modelheight=590"}]
ngOnInit(): void {
  this.service.getDetails();
  this.list = this.service.prodList;
  
}

  
}
