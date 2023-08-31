import { Component, OnInit } from '@angular/core';
import { TestService } from '../Service/test.service';
import { Router } from '@angular/router';
import { ServicecartService } from '../services/servicecart.service';

@Component({
  selector: 'app-neweco',
  templateUrl: './neweco.component.html',
  styleUrls: ['./neweco.component.scss']
})
export class NewecoComponent implements OnInit {


  a: any = ""
  prodLists: any;
  prodList1: any;
  prodList2: any;
  prodList3: any;
  products: any;

  constructor(private serv: TestService, private r: Router, private cartService: ServicecartService) { }
  ngOnInit(): void {
    this.prodLists = this.serv.prodList.slice(0, 4);
    this.prodList1 = this.serv.prodList1.slice(0, 4);
    this.prodList2 = this.serv.prodList2.slice(0, 4);
    this.prodList3 = this.serv.prodList3.slice(0, 4);
  }

  addtocart(item: any) {
    this.cartService.addtoCart(item);
  }

  Getproduct() {}
  
  Route(prodId: any, categoryId: any) {
    this.r.navigate(['/productdet'], { queryParams: { prodId: prodId, catId: categoryId } })
  }


}