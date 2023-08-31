import { Component } from '@angular/core';
import { TestService } from '../Service/test.service';
import { Router } from '@angular/router';
import { ServicecartService } from '../services/servicecart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  list: any = [];
  list1: any = [];
  list2: any = [];
  list3: any = [];
  list4: any = [];
  list5: any = [];
  list6: any = [];
  list7: any = [];
  prodList: any;



  constructor(private service: TestService, private router: Router, private r: Router, private cartService: ServicecartService) {
    this.list = this.service.prodList;
    //this.list1 = this.service.prodList0;
    this.list2 = this.service.prodList1;
    // this.list3 = this.service.prodList11;
    this.list4 = this.service.prodList2;
    //this.list5 = this.service.prodList22;
    this.list6 = this.service.prodList3;
    //this.list7 = this.service.prodList33;

  }

  Getproduct() {}

  Route(prodId: any, categoryId: any) {
  
    this.r.navigate(['/productdet'], { queryParams: { prodList: prodId, catId: categoryId } })
  }

  addtocart(item: any) {

    this.cartService.addtoCart(item);

  }
  filter(category: string) {
    this.prodList = this.service.Getproducts();
    this.list = this.prodList.filter((x: any) => x.categoryId == 1)((x: any) => {
      if (x.category == category || category == '') {
        return x;
      }
    })
  }
}
